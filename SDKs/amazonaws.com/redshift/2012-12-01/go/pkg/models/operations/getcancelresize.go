package operations

type GetCancelResizeActionEnum string

const (
	GetCancelResizeActionEnumCancelResize GetCancelResizeActionEnum = "CancelResize"
)

type GetCancelResizeVersionEnum string

const (
	GetCancelResizeVersionEnumTwoThousandAndTwelve1201 GetCancelResizeVersionEnum = "2012-12-01"
)

type GetCancelResizeQueryParams struct {
	Action            GetCancelResizeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                     `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetCancelResizeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelResizeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCancelResizeRequest struct {
	QueryParams GetCancelResizeQueryParams
	Headers     GetCancelResizeHeaders
}

type GetCancelResizeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
