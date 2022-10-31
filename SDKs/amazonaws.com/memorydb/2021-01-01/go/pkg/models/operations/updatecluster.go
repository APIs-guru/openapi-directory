package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClusterXAmzTargetEnum string

const (
	UpdateClusterXAmzTargetEnumAmazonMemoryDbUpdateCluster UpdateClusterXAmzTargetEnum = "AmazonMemoryDB.UpdateCluster"
)

type UpdateClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateClusterRequest struct {
	Headers UpdateClusterHeaders
	Request shared.UpdateClusterRequest `request:"mediaType=application/json"`
}

type UpdateClusterResponse struct {
	ACLNotFoundFault                     *interface{}
	ClusterNotFoundFault                 *interface{}
	ClusterQuotaForCustomerExceededFault *interface{}
	ContentType                          string
	InvalidACLStateFault                 *interface{}
	InvalidClusterStateFault             *interface{}
	InvalidKmsKeyFault                   *interface{}
	InvalidNodeStateFault                *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	InvalidVpcNetworkStateFault          *interface{}
	NoOperationFault                     *interface{}
	NodeQuotaForClusterExceededFault     *interface{}
	NodeQuotaForCustomerExceededFault    *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	ShardsPerClusterQuotaExceededFault   *interface{}
	StatusCode                           int64
	UpdateClusterResponse                *shared.UpdateClusterResponse
}
