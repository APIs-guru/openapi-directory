package operations

import (
	"openapi/pkg/models/shared"
)

type GetReceiveMessagePathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetReceiveMessageActionEnum string

const (
	GetReceiveMessageActionEnumReceiveMessage GetReceiveMessageActionEnum = "ReceiveMessage"
)

type GetReceiveMessageVersionEnum string

const (
	GetReceiveMessageVersionEnumTwoThousandAndTwelve1105 GetReceiveMessageVersionEnum = "2012-11-05"
)

type GetReceiveMessageQueryParams struct {
	Action                  GetReceiveMessageActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	AttributeNames          []shared.QueueAttributeNameEnum `queryParam:"style=form,explode=true,name=AttributeNames"`
	MaxNumberOfMessages     *int64                          `queryParam:"style=form,explode=true,name=MaxNumberOfMessages"`
	MessageAttributeNames   []string                        `queryParam:"style=form,explode=true,name=MessageAttributeNames"`
	ReceiveRequestAttemptID *string                         `queryParam:"style=form,explode=true,name=ReceiveRequestAttemptId"`
	Version                 GetReceiveMessageVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
	VisibilityTimeout       *int64                          `queryParam:"style=form,explode=true,name=VisibilityTimeout"`
	WaitTimeSeconds         *int64                          `queryParam:"style=form,explode=true,name=WaitTimeSeconds"`
}

type GetReceiveMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReceiveMessageRequest struct {
	PathParams  GetReceiveMessagePathParams
	QueryParams GetReceiveMessageQueryParams
	Headers     GetReceiveMessageHeaders
}

type GetReceiveMessageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
