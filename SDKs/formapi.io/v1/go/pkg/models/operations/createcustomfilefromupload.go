package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomFileFromUploadRequestBodyCreateCustomFileData struct {
	CacheID string `json:"cache_id"`
}

type CreateCustomFileFromUploadSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreateCustomFileFromUploadRequest struct {
	Request  CreateCustomFileFromUploadRequestBodyCreateCustomFileData `request:"mediaType=application/json"`
	Security CreateCustomFileFromUploadSecurity
}

type CreateCustomFileFromUpload201ApplicationJSONCustomFileCustomFile struct {
	ID  string `json:"id"`
	URL string `json:"url"`
}

type CreateCustomFileFromUpload201ApplicationJSONStatusEnum string

const (
	CreateCustomFileFromUpload201ApplicationJSONStatusEnumSuccess CreateCustomFileFromUpload201ApplicationJSONStatusEnum = "success"
	CreateCustomFileFromUpload201ApplicationJSONStatusEnumError   CreateCustomFileFromUpload201ApplicationJSONStatusEnum = "error"
)

type CreateCustomFileFromUpload201ApplicationJSONCreateCustomFileResponse struct {
	CustomFile CreateCustomFileFromUpload201ApplicationJSONCustomFileCustomFile `json:"custom_file"`
	Errors     []string                                                         `json:"errors"`
	Status     CreateCustomFileFromUpload201ApplicationJSONStatusEnum           `json:"status"`
}

type CreateCustomFileFromUploadResponse struct {
	ContentType              string
	StatusCode               int64
	AuthenticationError      *shared.AuthenticationError
	CreateCustomFileResponse *CreateCustomFileFromUpload201ApplicationJSONCreateCustomFileResponse
}
