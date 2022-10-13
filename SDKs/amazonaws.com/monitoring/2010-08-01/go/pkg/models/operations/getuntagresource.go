package operations

type GetUntagResourceActionEnum string

const (
	GetUntagResourceActionEnumUntagResource GetUntagResourceActionEnum = "UntagResource"
)

type GetUntagResourceVersionEnum string

const (
	GetUntagResourceVersionEnumTwoThousandAndTen0801 GetUntagResourceVersionEnum = "2010-08-01"
)

type GetUntagResourceQueryParams struct {
	Action      GetUntagResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceArn string                      `queryParam:"style=form,explode=true,name=ResourceARN"`
	TagKeys     []string                    `queryParam:"style=form,explode=true,name=TagKeys"`
	Version     GetUntagResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUntagResourceRequest struct {
	QueryParams GetUntagResourceQueryParams
	Headers     GetUntagResourceHeaders
}

type GetUntagResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
