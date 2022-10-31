package operations

import (
	"openapi/pkg/models/shared"
)

type CreateParameterGroupXAmzTargetEnum string

const (
	CreateParameterGroupXAmzTargetEnumAmazonMemoryDbCreateParameterGroup CreateParameterGroupXAmzTargetEnum = "AmazonMemoryDB.CreateParameterGroup"
)

type CreateParameterGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateParameterGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateParameterGroupRequest struct {
	Headers CreateParameterGroupHeaders
	Request shared.CreateParameterGroupRequest `request:"mediaType=application/json"`
}

type CreateParameterGroupResponse struct {
	ContentType                          string
	CreateParameterGroupResponse         *shared.CreateParameterGroupResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterGroupStateFault      *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupAlreadyExistsFault     *interface{}
	ParameterGroupQuotaExceededFault     *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
	TagQuotaPerResourceExceeded          *interface{}
}
