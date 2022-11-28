package operations

type EstimationAPIStatusQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type EstimationAPIStatusHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type EstimationAPIStatus200ApplicationJSONEnum string

const (
	EstimationAPIStatus200ApplicationJSONEnumDraft    EstimationAPIStatus200ApplicationJSONEnum = "Draft"
	EstimationAPIStatus200ApplicationJSONEnumAccepted EstimationAPIStatus200ApplicationJSONEnum = "Accepted"
	EstimationAPIStatus200ApplicationJSONEnumRejected EstimationAPIStatus200ApplicationJSONEnum = "Rejected"
)

type EstimationAPIStatus200TextJSONEnum string

const (
	EstimationAPIStatus200TextJSONEnumDraft    EstimationAPIStatus200TextJSONEnum = "Draft"
	EstimationAPIStatus200TextJSONEnumAccepted EstimationAPIStatus200TextJSONEnum = "Accepted"
	EstimationAPIStatus200TextJSONEnumRejected EstimationAPIStatus200TextJSONEnum = "Rejected"
)

type EstimationAPIStatusRequest struct {
	QueryParams EstimationAPIStatusQueryParams
	Headers     EstimationAPIStatusHeaders
}

type EstimationAPIStatusResponse struct {
	Body                                            []byte
	ContentType                                     string
	EstimationAPIStatus200ApplicationJSONStringEnum *EstimationAPIStatus200ApplicationJSONEnum
	EstimationAPIStatus200TextJSONStringEnum        *EstimationAPIStatus200TextJSONEnum
	StatusCode                                      int64
}
