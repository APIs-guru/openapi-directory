package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStudioHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateStudioRequestBodyStudioEncryptionConfiguration struct {
	KeyArn  *string                                          `json:"keyArn,omitempty"`
	KeyType *shared.StudioEncryptionConfigurationKeyTypeEnum `json:"keyType,omitempty"`
}

type CreateStudioRequestBody struct {
	AdminRoleArn                  string                                                `json:"adminRoleArn"`
	DisplayName                   string                                                `json:"displayName"`
	StudioEncryptionConfiguration *CreateStudioRequestBodyStudioEncryptionConfiguration `json:"studioEncryptionConfiguration,omitempty"`
	StudioName                    string                                                `json:"studioName"`
	Tags                          map[string]string                                     `json:"tags,omitempty"`
	UserRoleArn                   string                                                `json:"userRoleArn"`
}

type CreateStudioRequest struct {
	Headers CreateStudioHeaders
	Request CreateStudioRequestBody `request:"mediaType=application/json"`
}

type CreateStudioResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateStudioResponse          *shared.CreateStudioResponse
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
