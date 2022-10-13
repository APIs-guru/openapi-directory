package operations

import (
	"openapi/pkg/models/shared"
)

type ListCampaignsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListCampaignsXAmzTargetEnum string

const (
	ListCampaignsXAmzTargetEnumAmazonPersonalizeListCampaigns ListCampaignsXAmzTargetEnum = "AmazonPersonalize.ListCampaigns"
)

type ListCampaignsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCampaignsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCampaignsRequest struct {
	QueryParams ListCampaignsQueryParams
	Headers     ListCampaignsHeaders
	Request     shared.ListCampaignsRequest `request:"mediaType=application/json"`
}

type ListCampaignsResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	InvalidNextTokenException *interface{}
	ListCampaignsResponse     *shared.ListCampaignsResponse
	StatusCode                int64
}
