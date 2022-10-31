package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFilePathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type UploadFileSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type UploadFileRequest struct {
	PathParams UploadFilePathParams
	Request    *shared.FormDataContentDisposition `request:"mediaType=multipart/form-data"`
	Security   UploadFileSecurity
}

type UploadFileResponse struct {
	ContentType                        string
	StatusCode                         int64
	UploadFile200ApplicationJSONObject map[string]interface{}
}
