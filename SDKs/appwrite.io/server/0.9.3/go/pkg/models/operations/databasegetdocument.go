package operations

import (
	"openapi/pkg/models/shared"
)

type DatabaseGetDocumentPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
	DocumentID   string `pathParam:"style=simple,explode=false,name=documentId"`
}

type DatabaseGetDocumentSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type DatabaseGetDocumentRequest struct {
	PathParams DatabaseGetDocumentPathParams
	Security   DatabaseGetDocumentSecurity
}

type DatabaseGetDocumentResponse struct {
	ContentType string
	StatusCode  int64
	Document    map[string]interface{}
}
