package operations

type GetGetQueueURLActionEnum string

const (
	GetGetQueueURLActionEnumGetQueueURL GetGetQueueURLActionEnum = "GetQueueUrl"
)

type GetGetQueueURLVersionEnum string

const (
	GetGetQueueURLVersionEnumTwoThousandAndTwelve1105 GetGetQueueURLVersionEnum = "2012-11-05"
)

type GetGetQueueURLQueryParams struct {
	Action                 GetGetQueueURLActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	QueueName              string                    `queryParam:"style=form,explode=true,name=QueueName"`
	QueueOwnerAwsAccountID *string                   `queryParam:"style=form,explode=true,name=QueueOwnerAWSAccountId"`
	Version                GetGetQueueURLVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetQueueURLHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetQueueURLRequest struct {
	QueryParams GetGetQueueURLQueryParams
	Headers     GetGetQueueURLHeaders
}

type GetGetQueueURLResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
