package operations

import (
	"openapi/pkg/models/shared"
)

type ProductAvailabilityPathParams struct {
	Sku       string `pathParam:"style=simple,explode=false,name=sku"`
	SubjectID string `pathParam:"style=simple,explode=false,name=subjectId"`
}

type ProductAvailabilitySecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type ProductAvailabilityRequest struct {
	PathParams ProductAvailabilityPathParams
	Security   ProductAvailabilitySecurity
}

type ProductAvailabilityResponse struct {
	ContentType                                  string
	ProductAvailability200ApplicationJSONAny     *interface{}
	ProductAvailabilityDefaultApplicationJSONAny *interface{}
	StatusCode                                   int64
}
