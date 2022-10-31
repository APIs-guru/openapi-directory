package operations

import (
	"openapi/pkg/models/shared"
)

type GetLensVersionDifferencePathParams struct {
	LensAlias string `pathParam:"style=simple,explode=false,name=LensAlias"`
}

type GetLensVersionDifferenceQueryParams struct {
	BaseLensVersion string `queryParam:"style=form,explode=true,name=BaseLensVersion"`
}

type GetLensVersionDifferenceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetLensVersionDifferenceRequest struct {
	PathParams  GetLensVersionDifferencePathParams
	QueryParams GetLensVersionDifferenceQueryParams
	Headers     GetLensVersionDifferenceHeaders
}

type GetLensVersionDifferenceResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	GetLensVersionDifferenceOutput *shared.GetLensVersionDifferenceOutput
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
