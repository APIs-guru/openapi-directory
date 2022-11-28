package operations

import (
	"openapi/pkg/models/shared"
)

type ListSignalingChannelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSignalingChannelsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListSignalingChannelsRequestBodyChannelNameCondition
// An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
type ListSignalingChannelsRequestBodyChannelNameCondition struct {
	ComparisonOperator *shared.ComparisonOperatorEnum `json:"ComparisonOperator,omitempty"`
	ComparisonValue    *string                        `json:"ComparisonValue,omitempty"`
}

type ListSignalingChannelsRequestBody struct {
	ChannelNameCondition *ListSignalingChannelsRequestBodyChannelNameCondition `json:"ChannelNameCondition,omitempty"`
	MaxResults           *int64                                                `json:"MaxResults,omitempty"`
	NextToken            *string                                               `json:"NextToken,omitempty"`
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
