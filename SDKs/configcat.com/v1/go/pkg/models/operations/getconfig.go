package operations

import (
	"openapi/pkg/models/shared"
)

type GetConfigPathParams struct {
	ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
}

type GetConfigRequest struct {
	PathParams GetConfigPathParams
}

type GetConfigResponse struct {
	ConfigModel        *shared.ConfigModel
	ConfigModelHaljson *shared.ConfigModelHaljson
	ContentType        string
	StatusCode         int64
}
