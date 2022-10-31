package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRobotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateRobotRequestBodyArchitectureEnum string

const (
	CreateRobotRequestBodyArchitectureEnumX8664 CreateRobotRequestBodyArchitectureEnum = "X86_64"
	CreateRobotRequestBodyArchitectureEnumArm64 CreateRobotRequestBodyArchitectureEnum = "ARM64"
	CreateRobotRequestBodyArchitectureEnumArmhf CreateRobotRequestBodyArchitectureEnum = "ARMHF"
)

type CreateRobotRequestBody struct {
	Architecture      CreateRobotRequestBodyArchitectureEnum `json:"architecture"`
	GreengrassGroupID string                                 `json:"greengrassGroupId"`
	Name              string                                 `json:"name"`
	Tags              map[string]string                      `json:"tags,omitempty"`
}

type CreateRobotRequest struct {
	Headers CreateRobotHeaders
	Request CreateRobotRequestBody `request:"mediaType=application/json"`
}

type CreateRobotResponse struct {
	ContentType                    string
	CreateRobotResponse            *shared.CreateRobotResponse
	InternalServerException        *interface{}
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
