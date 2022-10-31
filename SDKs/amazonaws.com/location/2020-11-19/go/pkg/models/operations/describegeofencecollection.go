package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGeofenceCollectionPathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
}

type DescribeGeofenceCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeGeofenceCollectionRequest struct {
	PathParams DescribeGeofenceCollectionPathParams
	Headers    DescribeGeofenceCollectionHeaders
}

type DescribeGeofenceCollectionResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	DescribeGeofenceCollectionResponse *shared.DescribeGeofenceCollectionResponse
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
