package operations

type ActivateMandatePathParams struct {
	MandateUUID string `pathParam:"style=simple,explode=false,name=mandateUuid"`
}

type ActivateMandateRequest struct {
	PathParams ActivateMandatePathParams
}

type ActivateMandateResponse struct {
	ContentType string
	StatusCode  int64
}
