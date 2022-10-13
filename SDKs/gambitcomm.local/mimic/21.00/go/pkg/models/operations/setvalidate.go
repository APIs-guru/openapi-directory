package operations

type SetValidatePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Validate int32 `pathParam:"style=simple,explode=false,name=validate"`
}

type SetValidateRequest struct {
	PathParams SetValidatePathParams
}

type SetValidateResponse struct {
	ContentType                               string
	StatusCode                                int64
	SetValidate200ApplicationJSONInt32Integer *int32
}
