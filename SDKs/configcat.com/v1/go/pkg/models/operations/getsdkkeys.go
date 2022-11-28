package operations

import (
	"openapi/pkg/models/shared"
)

type GetSDKKeysPathParams struct {
	ConfigID      string `pathParam:"style=simple,explode=false,name=configId"`
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetSDKKeysRequest struct {
	PathParams GetSDKKeysPathParams
}

type GetSDKKeysResponse struct {
	ContentType  string
	SdkKeysModel *shared.SDKKeysModel
	StatusCode   int64
}
