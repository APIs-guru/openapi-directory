package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCodeSigningConfigPathParams struct {
	CodeSigningConfigArn string `pathParam:"style=simple,explode=false,name=CodeSigningConfigArn"`
}

type UpdateCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCodeSigningConfigRequestBodyAllowedPublishers struct {
	SigningProfileVersionArns []string `json:"SigningProfileVersionArns"`
}

type UpdateCodeSigningConfigRequestBodyCodeSigningPolicies struct {
	UntrustedArtifactOnDeployment *shared.CodeSigningPolicyEnum `json:"UntrustedArtifactOnDeployment"`
}

type UpdateCodeSigningConfigRequestBody struct {
	AllowedPublishers   *UpdateCodeSigningConfigRequestBodyAllowedPublishers   `json:"AllowedPublishers"`
	CodeSigningPolicies *UpdateCodeSigningConfigRequestBodyCodeSigningPolicies `json:"CodeSigningPolicies"`
	Description         *string                                                `json:"Description"`
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
