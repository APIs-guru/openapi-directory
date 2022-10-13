package operations

type RejectDirectDebitPathParams struct {
	DirectDebitUUID string `pathParam:"style=simple,explode=false,name=directDebitUuid"`
}

type RejectDirectDebitRequest struct {
	PathParams RejectDirectDebitPathParams
}

type RejectDirectDebitResponse struct {
	ContentType string
	StatusCode  int64
}
