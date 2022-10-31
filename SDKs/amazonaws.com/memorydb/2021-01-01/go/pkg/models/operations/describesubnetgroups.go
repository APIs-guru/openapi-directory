package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSubnetGroupsXAmzTargetEnum string

const (
	DescribeSubnetGroupsXAmzTargetEnumAmazonMemoryDbDescribeSubnetGroups DescribeSubnetGroupsXAmzTargetEnum = "AmazonMemoryDB.DescribeSubnetGroups"
)

type DescribeSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSubnetGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
