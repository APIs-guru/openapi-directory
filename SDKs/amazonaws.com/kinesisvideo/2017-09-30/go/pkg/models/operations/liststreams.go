package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListStreamsRequestBodyStreamNameCondition
// Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.
type ListStreamsRequestBodyStreamNameCondition struct {
	ComparisonOperator *shared.ComparisonOperatorEnum `json:"ComparisonOperator,omitempty"`
	ComparisonValue    *string                        `json:"ComparisonValue,omitempty"`
}

type ListStreamsRequestBody struct {
	MaxResults          *int64                                     `json:"MaxResults,omitempty"`
	NextToken           *string                                    `json:"NextToken,omitempty"`
	StreamNameCondition *ListStreamsRequestBodyStreamNameCondition `json:"StreamNameCondition,omitempty"`
}

type ListStreamsRequest struct {
	QueryParams ListStreamsQueryParams
	Headers     ListStreamsHeaders
	Request     ListStreamsRequestBody `request:"mediaType=application/json"`
}

type ListStreamsResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	InvalidArgumentException     *interface{}
	ListStreamsOutput            *shared.ListStreamsOutput
	StatusCode                   int64
}
