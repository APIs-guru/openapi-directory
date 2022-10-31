package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteParameterGroupXAmzTargetEnum string

const (
	DeleteParameterGroupXAmzTargetEnumAmazonMemoryDbDeleteParameterGroup DeleteParameterGroupXAmzTargetEnum = "AmazonMemoryDB.DeleteParameterGroup"
)

type DeleteParameterGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteParameterGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteParameterGroupRequest struct {
	Headers DeleteParameterGroupHeaders
	Request shared.DeleteParameterGroupRequest `request:"mediaType=application/json"`
}

type DeleteParameterGroupResponse struct {
	ContentType                          string
	DeleteParameterGroupResponse         *shared.DeleteParameterGroupResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterGroupStateFault      *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
