package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCampaignXAmzTargetEnum string

const (
	CreateCampaignXAmzTargetEnumAmazonPersonalizeCreateCampaign CreateCampaignXAmzTargetEnum = "AmazonPersonalize.CreateCampaign"
)

type CreateCampaignHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCampaignXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCampaignRequest struct {
	Headers CreateCampaignHeaders
	Request shared.CreateCampaignRequest `request:"mediaType=application/json"`
}

type CreateCampaignResponse struct {
	ContentType                    string
	CreateCampaignResponse         *shared.CreateCampaignResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
