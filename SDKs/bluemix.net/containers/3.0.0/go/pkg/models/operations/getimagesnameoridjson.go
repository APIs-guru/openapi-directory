package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagesNameOrIDJSONPathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type GetImagesNameOrIDJSONHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetImagesNameOrIDJSONRequest struct {
	PathParams GetImagesNameOrIDJSONPathParams
	Headers    GetImagesNameOrIDJSONHeaders
}

type GetImagesNameOrIDJSONResponse struct {
	ContentType string
	ImageDetail *shared.ImageDetail
	StatusCode  int64
}
