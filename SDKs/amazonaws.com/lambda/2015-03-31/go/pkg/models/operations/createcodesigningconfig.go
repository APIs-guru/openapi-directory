package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateCodeSigningConfigRequestBodyAllowedPublishers struct {
	SigningProfileVersionArns []string `json:"SigningProfileVersionArns"`
}

type CreateCodeSigningConfigRequestBodyCodeSigningPolicies struct {
	UntrustedArtifactOnDeployment *shared.CodeSigningPolicyEnum `json:"UntrustedArtifactOnDeployment"`
}

type CreateCodeSigningConfigRequestBody struct {
	AllowedPublishers   CreateCodeSigningConfigRequestBodyAllowedPublishers    `json:"AllowedPublishers"`
	CodeSigningPolicies *CreateCodeSigningConfigRequestBodyCodeSigningPolicies `json:"CodeSigningPolicies"`
	Description         *string                                                `json:"Description"`
}

type CreateCodeSigningConfigRequest struct {
	Headers CreateCodeSigningConfigHeaders
	Request CreateCodeSigningConfigRequestBody `request:"mediaType=application/json"`
}

type CreateCodeSigningConfigResponse struct {
	ContentType                     string
	CreateCodeSigningConfigResponse *shared.CreateCodeSigningConfigResponse
	InvalidParameterValueException  *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
}
