package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourceDataSyncXAmzTargetEnum string

const (
	DeleteResourceDataSyncXAmzTargetEnumAmazonSsmDeleteResourceDataSync DeleteResourceDataSyncXAmzTargetEnum = "AmazonSSM.DeleteResourceDataSync"
)

type DeleteResourceDataSyncHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourceDataSyncXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResourceDataSyncRequest struct {
	Headers DeleteResourceDataSyncHeaders
	Request shared.DeleteResourceDataSyncRequest `request:"mediaType=application/json"`
}

type DeleteResourceDataSyncResponse struct {
	ContentType                                   string
	DeleteResourceDataSyncResult                  map[string]interface{}
	InternalServerError                           *interface{}
	ResourceDataSyncInvalidConfigurationException *interface{}
	ResourceDataSyncNotFoundException             *interface{}
	StatusCode                                    int64
}
