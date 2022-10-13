package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteFileUploadViaSharePathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
	UploadID  string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type CompleteFileUploadViaShareHeaders struct {
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type CompleteFileUploadViaShareRequest struct {
	PathParams CompleteFileUploadViaSharePathParams
	Headers    CompleteFileUploadViaShareHeaders
	Request    shared.UserFileKeyList `request:"mediaType=application/json"`
}

type CompleteFileUploadViaShareResponse struct {
	ContentType            string
	ErrorResponse          *shared.ErrorResponse
	PublicUploadedFileData *shared.PublicUploadedFileData
	StatusCode             int64
}
