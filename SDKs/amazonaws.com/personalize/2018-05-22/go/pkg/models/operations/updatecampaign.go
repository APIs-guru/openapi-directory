package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCampaignXAmzTargetEnum string

const (
	UpdateCampaignXAmzTargetEnumAmazonPersonalizeUpdateCampaign UpdateCampaignXAmzTargetEnum = "AmazonPersonalize.UpdateCampaign"
)

type UpdateCampaignHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCampaignXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCampaignRequest struct {
	Headers UpdateCampaignHeaders
	Request shared.UpdateCampaignRequest `request:"mediaType=application/json"`
}

type UpdateCampaignResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateCampaignResponse    *shared.UpdateCampaignResponse
}
