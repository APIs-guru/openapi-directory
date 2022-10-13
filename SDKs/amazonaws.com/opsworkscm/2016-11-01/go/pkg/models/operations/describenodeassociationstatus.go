package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeNodeAssociationStatusXAmzTargetEnum string

const (
	DescribeNodeAssociationStatusXAmzTargetEnumOpsWorksCmV20161101DescribeNodeAssociationStatus DescribeNodeAssociationStatusXAmzTargetEnum = "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus"
)

type DescribeNodeAssociationStatusHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeNodeAssociationStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeNodeAssociationStatusRequest struct {
	Headers DescribeNodeAssociationStatusHeaders
	Request shared.DescribeNodeAssociationStatusRequest `request:"mediaType=application/json"`
}

type DescribeNodeAssociationStatusResponse struct {
	ContentType                           string
	DescribeNodeAssociationStatusResponse *shared.DescribeNodeAssociationStatusResponse
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ValidationException                   *interface{}
}
