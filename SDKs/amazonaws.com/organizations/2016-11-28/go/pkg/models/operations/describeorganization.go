package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOrganizationXAmzTargetEnum string

const (
	DescribeOrganizationXAmzTargetEnumAwsOrganizationsV20161128DescribeOrganization DescribeOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.DescribeOrganization"
)

type DescribeOrganizationHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeOrganizationRequest struct {
	Headers DescribeOrganizationHeaders
}

type DescribeOrganizationResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConcurrentModificationException   *interface{}
	ContentType                       string
	DescribeOrganizationResponse      *shared.DescribeOrganizationResponse
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
