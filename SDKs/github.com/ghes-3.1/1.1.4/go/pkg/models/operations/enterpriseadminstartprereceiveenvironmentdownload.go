package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams struct {
	PreReceiveEnvironmentID int64 `pathParam:"style=simple,explode=false,name=pre_receive_environment_id"`
}

type EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors struct {
	Code     *string `json:"code,omitempty"`
	Message  *string `json:"message,omitempty"`
	Resource *string `json:"resource,omitempty"`
}

type EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON struct {
	Errors  []EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors `json:"errors,omitempty"`
	Message *string                                                                     `json:"message,omitempty"`
}

type EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest struct {
	PathParams EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams
}

type EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject *EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON
	PreReceiveEnvironmentDownloadStatus                                       *shared.PreReceiveEnvironmentDownloadStatus
}
