package operations

import (
	"openapi/pkg/models/shared"
)

type ProductSearchPathParams struct {
	SubjectID string `pathParam:"style=simple,explode=false,name=subjectId"`
}

type ProductSearchSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type ProductSearchRequest struct {
	PathParams ProductSearchPathParams
	Security   ProductSearchSecurity
}

type ProductSearchResponse struct {
	ContentType                            string
	ProductSearch200ApplicationJSONAnies   []interface{}
	ProductSearchDefaultApplicationJSONAny *interface{}
	StatusCode                             int64
}
