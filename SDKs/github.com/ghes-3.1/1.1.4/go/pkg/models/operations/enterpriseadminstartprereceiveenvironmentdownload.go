package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams struct {
	PreReceiveEnvironmentID int64 `pathParam:"style=simple,explode=false,name=pre_receive_environment_id"`
}

type EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest struct {
	PathParams EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams
}

type EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors struct {
	Code     *string `json:"code"`
	Message  *string `json:"message"`
	Resource *string `json:"resource"`
}

type EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON struct {
	Errors  []EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors `json:"errors"`
	Message *string                                                                     `json:"message"`
}

type EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject *EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON
	PreReceiveEnvironmentDownloadStatus                                       *shared.PreReceiveEnvironmentDownloadStatus
}
