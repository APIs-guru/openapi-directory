package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatapointsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetDatapointsIDRequest struct {
	PathParams GetDatapointsIDPathParams
}

type GetDatapointsIDResponse struct {
	APICoreDtoDatapointsDatapoint *shared.APICoreDtoDatapointsDatapoint
	ContentType                   string
	StatusCode                    int64
}
