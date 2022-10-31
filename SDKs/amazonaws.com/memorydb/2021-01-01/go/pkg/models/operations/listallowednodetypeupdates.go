package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllowedNodeTypeUpdatesXAmzTargetEnum string

const (
	ListAllowedNodeTypeUpdatesXAmzTargetEnumAmazonMemoryDbListAllowedNodeTypeUpdates ListAllowedNodeTypeUpdatesXAmzTargetEnum = "AmazonMemoryDB.ListAllowedNodeTypeUpdates"
)

type ListAllowedNodeTypeUpdatesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAllowedNodeTypeUpdatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAllowedNodeTypeUpdatesRequest struct {
	Headers ListAllowedNodeTypeUpdatesHeaders
	Request shared.ListAllowedNodeTypeUpdatesRequest `request:"mediaType=application/json"`
}

type ListAllowedNodeTypeUpdatesResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ListAllowedNodeTypeUpdatesResponse   *shared.ListAllowedNodeTypeUpdatesResponse
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
