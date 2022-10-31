package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeContainerXAmzTargetEnum string

const (
	DescribeContainerXAmzTargetEnumMediaStore20170901DescribeContainer DescribeContainerXAmzTargetEnum = "MediaStore_20170901.DescribeContainer"
)

type DescribeContainerHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeContainerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeContainerRequest struct {
	Headers DescribeContainerHeaders
	Request shared.DescribeContainerInput `request:"mediaType=application/json"`
}

type DescribeContainerResponse struct {
	ContainerNotFoundException *interface{}
	ContentType                string
	DescribeContainerOutput    *shared.DescribeContainerOutput
	InternalServerError        *interface{}
	StatusCode                 int64
}
