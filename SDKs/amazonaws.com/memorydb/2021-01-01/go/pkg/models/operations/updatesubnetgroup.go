package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubnetGroupXAmzTargetEnum string

const (
	UpdateSubnetGroupXAmzTargetEnumAmazonMemoryDbUpdateSubnetGroup UpdateSubnetGroupXAmzTargetEnum = "AmazonMemoryDB.UpdateSubnetGroup"
)

type UpdateSubnetGroupHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSubnetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateSubnetGroupRequest struct {
	Headers UpdateSubnetGroupHeaders
	Request shared.UpdateSubnetGroupRequest `request:"mediaType=application/json"`
}

type UpdateSubnetGroupResponse struct {
	ContentType                    string
	InvalidSubnet                  *interface{}
	ServiceLinkedRoleNotFoundFault *interface{}
	StatusCode                     int64
	SubnetGroupNotFoundFault       *interface{}
	SubnetInUse                    *interface{}
	SubnetNotAllowedFault          *interface{}
	SubnetQuotaExceededFault       *interface{}
	UpdateSubnetGroupResponse      *shared.UpdateSubnetGroupResponse
}
