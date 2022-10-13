package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAssociationXAmzTargetEnum string

const (
	DescribeAssociationXAmzTargetEnumAmazonSsmDescribeAssociation DescribeAssociationXAmzTargetEnum = "AmazonSSM.DescribeAssociation"
)

type DescribeAssociationHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAssociationRequest struct {
	Headers DescribeAssociationHeaders
	Request shared.DescribeAssociationRequest `request:"mediaType=application/json"`
}

type DescribeAssociationResponse struct {
	AssociationDoesNotExist   *interface{}
	ContentType               string
	DescribeAssociationResult *shared.DescribeAssociationResult
	InternalServerError       *interface{}
	InvalidAssociationVersion *interface{}
	InvalidDocument           *interface{}
	InvalidInstanceID         *interface{}
	StatusCode                int64
}
