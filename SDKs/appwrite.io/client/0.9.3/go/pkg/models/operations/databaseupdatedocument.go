package operations

import (
	"openapi/pkg/models/shared"
)

type DatabaseUpdateDocumentPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
	DocumentID   string `pathParam:"style=simple,explode=false,name=documentId"`
}

type DatabaseUpdateDocumentRequestBody struct {
	Data  map[string]interface{} `json:"data"`
	Read  []string               `json:"read,omitempty"`
	Write []string               `json:"write,omitempty"`
}

type DatabaseUpdateDocumentSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type DatabaseUpdateDocumentRequest struct {
	PathParams DatabaseUpdateDocumentPathParams
	Request    *DatabaseUpdateDocumentRequestBody `request:"mediaType=application/json"`
	Security   DatabaseUpdateDocumentSecurity
}

type DatabaseUpdateDocumentResponse struct {
	ContentType string
	StatusCode  int64
	Document    map[string]interface{}
}
