package operations

import (
	"openapi/pkg/models/shared"
)

type ResetParameterGroupXAmzTargetEnum string

const (
	ResetParameterGroupXAmzTargetEnumAmazonMemoryDbResetParameterGroup ResetParameterGroupXAmzTargetEnum = "AmazonMemoryDB.ResetParameterGroup"
)

type ResetParameterGroupHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ResetParameterGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ResetParameterGroupRequest struct {
	Headers ResetParameterGroupHeaders
	Request shared.ResetParameterGroupRequest `request:"mediaType=application/json"`
}

type ResetParameterGroupResponse struct {
	ContentType                          string
	InvalidParameterCombinationException *interface{}
	InvalidParameterGroupStateFault      *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ResetParameterGroupResponse          *shared.ResetParameterGroupResponse
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
