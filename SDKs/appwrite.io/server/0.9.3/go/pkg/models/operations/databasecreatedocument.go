package operations

import (
	"openapi/pkg/models/shared"
)

type DatabaseCreateDocumentPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
}

type DatabaseCreateDocumentRequestBody struct {
	Data               map[string]interface{} `json:"data"`
	ParentDocument     *string                `json:"parentDocument"`
	ParentProperty     *string                `json:"parentProperty"`
	ParentPropertyType *string                `json:"parentPropertyType"`
	Read               []string               `json:"read"`
	Write              []string               `json:"write"`
}

type DatabaseCreateDocumentSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type DatabaseCreateDocumentRequest struct {
	PathParams DatabaseCreateDocumentPathParams
	Request    *DatabaseCreateDocumentRequestBody `request:"mediaType=application/json"`
	Security   DatabaseCreateDocumentSecurity
}

type DatabaseCreateDocumentResponse struct {
	ContentType string
	StatusCode  int64
	Document    map[string]interface{}
}
