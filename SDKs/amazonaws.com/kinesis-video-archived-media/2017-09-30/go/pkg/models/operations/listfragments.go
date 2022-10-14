package operations

import (
	"openapi/pkg/models/shared"
)

type ListFragmentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFragmentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFragmentsRequestBodyFragmentSelector struct {
	FragmentSelectorType *shared.FragmentSelectorTypeEnum `json:"FragmentSelectorType,omitempty"`
	TimestampRange       *shared.TimestampRange           `json:"TimestampRange,omitempty"`
}

type ListFragmentsRequestBody struct {
	FragmentSelector *ListFragmentsRequestBodyFragmentSelector `json:"FragmentSelector,omitempty"`
	MaxResults       *int64                                    `json:"MaxResults,omitempty"`
	NextToken        *string                                   `json:"NextToken,omitempty"`
	StreamArn        *string                                   `json:"StreamARN,omitempty"`
	StreamName       *string                                   `json:"StreamName,omitempty"`
}

type ListFragmentsRequest struct {
	QueryParams ListFragmentsQueryParams
	Headers     ListFragmentsHeaders
	Request     ListFragmentsRequestBody `request:"mediaType=application/json"`
}

type ListFragmentsResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	InvalidArgumentException     *interface{}
	ListFragmentsOutput          *shared.ListFragmentsOutput
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
