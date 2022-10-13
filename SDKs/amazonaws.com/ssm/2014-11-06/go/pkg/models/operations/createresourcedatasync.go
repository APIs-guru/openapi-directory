package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceDataSyncXAmzTargetEnum string

const (
	CreateResourceDataSyncXAmzTargetEnumAmazonSsmCreateResourceDataSync CreateResourceDataSyncXAmzTargetEnum = "AmazonSSM.CreateResourceDataSync"
)

type CreateResourceDataSyncHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateResourceDataSyncXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateResourceDataSyncRequest struct {
	Headers CreateResourceDataSyncHeaders
	Request shared.CreateResourceDataSyncRequest `request:"mediaType=application/json"`
}

type CreateResourceDataSyncResponse struct {
	ContentType                                   string
	CreateResourceDataSyncResult                  map[string]interface{}
	InternalServerError                           *interface{}
	ResourceDataSyncAlreadyExistsException        *interface{}
	ResourceDataSyncCountExceededException        *interface{}
	ResourceDataSyncInvalidConfigurationException *interface{}
	StatusCode                                    int64
}
