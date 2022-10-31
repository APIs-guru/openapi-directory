package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteS3FileUploadViaSharePathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
	UploadID  string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type CompleteS3FileUploadViaShareRequest struct {
	PathParams CompleteS3FileUploadViaSharePathParams
	Request    shared.CompleteS3ShareUploadRequest `request:"mediaType=application/json"`
}

type CompleteS3FileUploadViaShareResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
