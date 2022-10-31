package operations

import (
	"openapi/pkg/models/shared"
)

type PepRetrievePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PepRetrieveAcceptEnum string

const (
	PepRetrieveAcceptEnumApplicationJSON PepRetrieveAcceptEnum = "application/json"
	PepRetrieveAcceptEnumApplicationPdf  PepRetrieveAcceptEnum = "application/pdf"
)

type PepRetrieveHeaders struct {
	Accept *PepRetrieveAcceptEnum `header:"style=simple,explode=false,name=accept"`
}

type PepRetrieveSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type PepRetrieveRequest struct {
	PathParams PepRetrievePathParams
	Headers    PepRetrieveHeaders
	Security   PepRetrieveSecurity
}

type PepRetrieveResponse struct {
	ContentType                          string
	PepRetrieve200ApplicationJSONAny     *interface{}
	PepRetrieveDefaultApplicationJSONAny *interface{}
	StatusCode                           int64
}
