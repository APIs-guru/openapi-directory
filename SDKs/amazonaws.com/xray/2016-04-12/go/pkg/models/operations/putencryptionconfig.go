package operations

import (
	"openapi/pkg/models/shared"
)

type PutEncryptionConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutEncryptionConfigRequestBodyTypeEnum string

const (
	PutEncryptionConfigRequestBodyTypeEnumNone PutEncryptionConfigRequestBodyTypeEnum = "NONE"
	PutEncryptionConfigRequestBodyTypeEnumKms  PutEncryptionConfigRequestBodyTypeEnum = "KMS"
)

type PutEncryptionConfigRequestBody struct {
	KeyID *string                                `json:"KeyId,omitempty"`
	Type  PutEncryptionConfigRequestBodyTypeEnum `json:"Type"`
}

type PutEncryptionConfigRequest struct {
	Headers PutEncryptionConfigHeaders
	Request PutEncryptionConfigRequestBody `request:"mediaType=application/json"`
}

type PutEncryptionConfigResponse struct {
	ContentType               string
	InvalidRequestException   *interface{}
	PutEncryptionConfigResult *shared.PutEncryptionConfigResult
	StatusCode                int64
	ThrottledException        *interface{}
}
