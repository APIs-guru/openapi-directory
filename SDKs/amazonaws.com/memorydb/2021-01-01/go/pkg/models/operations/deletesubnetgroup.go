package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubnetGroupXAmzTargetEnum string

const (
	DeleteSubnetGroupXAmzTargetEnumAmazonMemoryDbDeleteSubnetGroup DeleteSubnetGroupXAmzTargetEnum = "AmazonMemoryDB.DeleteSubnetGroup"
)

type DeleteSubnetGroupHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSubnetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSubnetGroupRequest struct {
	Headers DeleteSubnetGroupHeaders
	Request shared.DeleteSubnetGroupRequest `request:"mediaType=application/json"`
}

type DeleteSubnetGroupResponse struct {
	ContentType                    string
	DeleteSubnetGroupResponse      *shared.DeleteSubnetGroupResponse
	ServiceLinkedRoleNotFoundFault *interface{}
	StatusCode                     int64
	SubnetGroupInUseFault          *interface{}
	SubnetGroupNotFoundFault       *interface{}
}
