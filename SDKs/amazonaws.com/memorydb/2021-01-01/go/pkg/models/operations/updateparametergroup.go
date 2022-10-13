package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateParameterGroupXAmzTargetEnum string

const (
	UpdateParameterGroupXAmzTargetEnumAmazonMemoryDbUpdateParameterGroup UpdateParameterGroupXAmzTargetEnum = "AmazonMemoryDB.UpdateParameterGroup"
)

type UpdateParameterGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateParameterGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateParameterGroupRequest struct {
	Headers UpdateParameterGroupHeaders
	Request shared.UpdateParameterGroupRequest `request:"mediaType=application/json"`
}

type UpdateParameterGroupResponse struct {
	ContentType                          string
	InvalidParameterCombinationException *interface{}
	InvalidParameterGroupStateFault      *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
	UpdateParameterGroupResponse         *shared.UpdateParameterGroupResponse
}
