package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClusterXAmzTargetEnum string

const (
	UpdateClusterXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateCluster UpdateClusterXAmzTargetEnum = "AWSIESnowballJobManagementService.UpdateCluster"
)

type UpdateClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateClusterRequest struct {
	Headers UpdateClusterHeaders
	Request shared.UpdateClusterRequest `request:"mediaType=application/json"`
}

type UpdateClusterResponse struct {
	ContentType                      string
	Ec2RequestFailedException        *interface{}
	InvalidInputCombinationException *interface{}
	InvalidJobStateException         *interface{}
	InvalidResourceException         *interface{}
	KmsRequestFailedException        *interface{}
	StatusCode                       int64
	UpdateClusterResult              map[string]interface{}
}
