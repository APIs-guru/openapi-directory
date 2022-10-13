package operations

import (
	"openapi/pkg/models/shared"
)

type GetSsoStrategiesIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetSsoStrategiesIDRequest struct {
	PathParams GetSsoStrategiesIDPathParams
}

type GetSsoStrategiesIDResponse struct {
	ContentType       string
	SsoStrategyEntity *shared.SsoStrategyEntity
	StatusCode        int64
}
