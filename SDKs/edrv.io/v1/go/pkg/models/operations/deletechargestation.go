package operations

type DeleteChargeStationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteChargeStationRequest struct {
	PathParams DeleteChargeStationPathParams
}

type DeleteChargeStationResponse struct {
	ContentType string
	StatusCode  int64
}
