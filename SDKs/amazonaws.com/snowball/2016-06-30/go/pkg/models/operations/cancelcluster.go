package operations

import (
	"openapi/pkg/models/shared"
)

type CancelClusterXAmzTargetEnum string

const (
	CancelClusterXAmzTargetEnumAwsieSnowballJobManagementServiceCancelCluster CancelClusterXAmzTargetEnum = "AWSIESnowballJobManagementService.CancelCluster"
)

type CancelClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelClusterRequest struct {
	Headers CancelClusterHeaders
	Request shared.CancelClusterRequest `request:"mediaType=application/json"`
}

type CancelClusterResponse struct {
	CancelClusterResult       map[string]interface{}
	ContentType               string
	InvalidJobStateException  *interface{}
	InvalidResourceException  *interface{}
	KmsRequestFailedException *interface{}
	StatusCode                int64
}
