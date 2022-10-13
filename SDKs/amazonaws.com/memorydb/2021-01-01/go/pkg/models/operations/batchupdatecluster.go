package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpdateClusterXAmzTargetEnum string

const (
	BatchUpdateClusterXAmzTargetEnumAmazonMemoryDbBatchUpdateCluster BatchUpdateClusterXAmzTargetEnum = "AmazonMemoryDB.BatchUpdateCluster"
)

type BatchUpdateClusterHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchUpdateClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchUpdateClusterRequest struct {
	Headers BatchUpdateClusterHeaders
	Request shared.BatchUpdateClusterRequest `request:"mediaType=application/json"`
}

type BatchUpdateClusterResponse struct {
	BatchUpdateClusterResponse     *shared.BatchUpdateClusterResponse
	ContentType                    string
	InvalidParameterValueException *interface{}
	ServiceUpdateNotFoundFault     *interface{}
	StatusCode                     int64
}
