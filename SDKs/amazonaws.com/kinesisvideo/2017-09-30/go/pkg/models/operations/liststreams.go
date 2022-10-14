package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

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
