package operations

type GetListQueuesActionEnum string

const (
	GetListQueuesActionEnumListQueues GetListQueuesActionEnum = "ListQueues"
)

type GetListQueuesVersionEnum string

const (
	GetListQueuesVersionEnumTwoThousandAndTwelve1105 GetListQueuesVersionEnum = "2012-11-05"
)

type GetListQueuesQueryParams struct {
	Action          GetListQueuesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults      *int64                   `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken       *string                  `queryParam:"style=form,explode=true,name=NextToken"`
	QueueNamePrefix *string                  `queryParam:"style=form,explode=true,name=QueueNamePrefix"`
	Version         GetListQueuesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListQueuesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListQueuesRequest struct {
	QueryParams GetListQueuesQueryParams
	Headers     GetListQueuesHeaders
}

type GetListQueuesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
