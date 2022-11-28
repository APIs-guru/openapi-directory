package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCodeSigningConfigPathParams struct {
	CodeSigningConfigArn string `pathParam:"style=simple,explode=false,name=CodeSigningConfigArn"`
}

type UpdateCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateCodeSigningConfigRequestBodyAllowedPublishers
// List of signing profiles that can sign a code package.
type UpdateCodeSigningConfigRequestBodyAllowedPublishers struct {
	SigningProfileVersionArns []string `json:"SigningProfileVersionArns,omitempty"`
}

// UpdateCodeSigningConfigRequestBodyCodeSigningPolicies
// Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
type UpdateCodeSigningConfigRequestBodyCodeSigningPolicies struct {
	UntrustedArtifactOnDeployment *shared.CodeSigningPolicyEnum `json:"UntrustedArtifactOnDeployment,omitempty"`
}

type UpdateCodeSigningConfigRequestBody struct {
	AllowedPublishers   *UpdateCodeSigningConfigRequestBodyAllowedPublishers   `json:"AllowedPublishers,omitempty"`
	CodeSigningPolicies *UpdateCodeSigningConfigRequestBodyCodeSigningPolicies `json:"CodeSigningPolicies,omitempty"`
	Description         *string                                                `json:"Description,omitempty"`
}

type UpdateCodeSigningConfigRequest struct {
	PathParams UpdateCodeSigningConfigPathParams
	Headers    UpdateCodeSigningConfigHeaders
	Request    UpdateCodeSigningConfigRequestBody `request:"mediaType=application/json"`
}

type UpdateCodeSigningConfigResponse struct {
	ContentType                     string
	InvalidParameterValueException  *interface{}
	ResourceNotFoundException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UpdateCodeSigningConfigResponse *shared.UpdateCodeSigningConfigResponse
}
