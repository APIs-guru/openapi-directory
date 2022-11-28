package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateCodeSigningConfigRequestBodyAllowedPublishers
// List of signing profiles that can sign a code package.
type CreateCodeSigningConfigRequestBodyAllowedPublishers struct {
	SigningProfileVersionArns []string `json:"SigningProfileVersionArns,omitempty"`
}

// CreateCodeSigningConfigRequestBodyCodeSigningPolicies
// Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
type CreateCodeSigningConfigRequestBodyCodeSigningPolicies struct {
	UntrustedArtifactOnDeployment *shared.CodeSigningPolicyEnum `json:"UntrustedArtifactOnDeployment,omitempty"`
}

type CreateCodeSigningConfigRequestBody struct {
	AllowedPublishers   CreateCodeSigningConfigRequestBodyAllowedPublishers    `json:"AllowedPublishers"`
	CodeSigningPolicies *CreateCodeSigningConfigRequestBodyCodeSigningPolicies `json:"CodeSigningPolicies,omitempty"`
	Description         *string                                                `json:"Description,omitempty"`
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
