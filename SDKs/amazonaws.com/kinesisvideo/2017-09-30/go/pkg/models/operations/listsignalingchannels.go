package operations

import (
	"openapi/pkg/models/shared"
)

type ListSignalingChannelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSignalingChannelsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListSignalingChannelsRequestBodyChannelNameCondition struct {
	ComparisonOperator *shared.ComparisonOperatorEnum `json:"ComparisonOperator"`
	ComparisonValue    *string                        `json:"ComparisonValue"`
}

type ListSignalingChannelsRequestBody struct {
	ChannelNameCondition *ListSignalingChannelsRequestBodyChannelNameCondition `json:"ChannelNameCondition"`
	MaxResults           *int64                                                `json:"MaxResults"`
	NextToken            *string                                               `json:"NextToken"`
}

type ListSignalingChannelsRequest struct {
	QueryParams ListSignalingChannelsQueryParams
	Headers     ListSignalingChannelsHeaders
	Request     ListSignalingChannelsRequestBody `request:"mediaType=application/json"`
}

type ListSignalingChannelsResponse struct {
	AccessDeniedException        *interface{}
	ClientLimitExceededException *interface{}
	ContentType                  string
	InvalidArgumentException     *interface{}
	ListSignalingChannelsOutput  *shared.ListSignalingChannelsOutput
	StatusCode                   int64
}
