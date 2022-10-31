package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceDataSyncXAmzTargetEnum string

const (
	CreateResourceDataSyncXAmzTargetEnumAmazonSsmCreateResourceDataSync CreateResourceDataSyncXAmzTargetEnum = "AmazonSSM.CreateResourceDataSync"
)

type CreateResourceDataSyncHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateResourceDataSyncXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
