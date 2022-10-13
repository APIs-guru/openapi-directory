package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSubnetGroupsXAmzTargetEnum string

const (
	DescribeSubnetGroupsXAmzTargetEnumAmazonMemoryDbDescribeSubnetGroups DescribeSubnetGroupsXAmzTargetEnum = "AmazonMemoryDB.DescribeSubnetGroups"
)

type DescribeSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSubnetGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSubnetGroupsRequest struct {
	Headers DescribeSubnetGroupsHeaders
	Request shared.DescribeSubnetGroupsRequest `request:"mediaType=application/json"`
}

type DescribeSubnetGroupsResponse struct {
	ContentType                    string
	DescribeSubnetGroupsResponse   *shared.DescribeSubnetGroupsResponse
	ServiceLinkedRoleNotFoundFault *interface{}
	StatusCode                     int64
	SubnetGroupNotFoundFault       *interface{}
}
