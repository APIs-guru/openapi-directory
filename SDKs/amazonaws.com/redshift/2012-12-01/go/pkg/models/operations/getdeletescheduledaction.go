package operations

type GetDeleteScheduledActionActionEnum string

const (
	GetDeleteScheduledActionActionEnumDeleteScheduledAction GetDeleteScheduledActionActionEnum = "DeleteScheduledAction"
)

type GetDeleteScheduledActionVersionEnum string

const (
	GetDeleteScheduledActionVersionEnumTwoThousandAndTwelve1201 GetDeleteScheduledActionVersionEnum = "2012-12-01"
)

type GetDeleteScheduledActionQueryParams struct {
	Action              GetDeleteScheduledActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ScheduledActionName string                              `queryParam:"style=form,explode=true,name=ScheduledActionName"`
	Version             GetDeleteScheduledActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteScheduledActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteScheduledActionRequest struct {
	QueryParams GetDeleteScheduledActionQueryParams
	Headers     GetDeleteScheduledActionHeaders
}

type GetDeleteScheduledActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
