package operations

import (
	"openapi/pkg/models/shared"
)

type GetSdkKeysPathParams struct {
	ConfigID      string `pathParam:"style=simple,explode=false,name=configId"`
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetSdkKeysRequest struct {
	PathParams GetSdkKeysPathParams
}

type GetSdkKeysResponse struct {
	ContentType  string
	SdkKeysModel *shared.SdkKeysModel
	StatusCode   int64
}
