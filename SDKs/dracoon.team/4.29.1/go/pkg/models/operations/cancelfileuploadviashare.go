package operations

import (
	"openapi/pkg/models/shared"
)

type CancelFileUploadViaSharePathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
	UploadID  string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type CancelFileUploadViaShareRequest struct {
	PathParams CancelFileUploadViaSharePathParams
}

type CancelFileUploadViaShareResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
