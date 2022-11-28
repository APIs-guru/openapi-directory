package operations

import (
	"openapi/pkg/models/shared"
)

type ListFragmentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFragmentsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListFragmentsRequestBodyFragmentSelector
// <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
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
