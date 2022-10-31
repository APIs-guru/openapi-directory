package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpdateClusterXAmzTargetEnum string

const (
	BatchUpdateClusterXAmzTargetEnumAmazonMemoryDbBatchUpdateCluster BatchUpdateClusterXAmzTargetEnum = "AmazonMemoryDB.BatchUpdateCluster"
)

type BatchUpdateClusterHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchUpdateClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
