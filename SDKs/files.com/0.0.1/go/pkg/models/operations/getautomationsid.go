package operations

import (
	"openapi/pkg/models/shared"
)

type GetAutomationsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAutomationsIDRequest struct {
	PathParams GetAutomationsIDPathParams
}

type GetAutomationsIDResponse struct {
	AutomationEntity *shared.AutomationEntity
	ContentType      string
	StatusCode       int64
}
