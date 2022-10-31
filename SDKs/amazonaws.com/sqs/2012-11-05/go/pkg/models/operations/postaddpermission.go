package operations

type PostAddPermissionActionEnum string

const (
	PostAddPermissionActionEnumAddPermission PostAddPermissionActionEnum = "AddPermission"
)

type PostAddPermissionVersionEnum string

const (
	PostAddPermissionVersionEnumTwoThousandAndTwelve1105 PostAddPermissionVersionEnum = "2012-11-05"
)

type PostAddPermissionQueryParams struct {
	Action  PostAddPermissionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddPermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddPermissionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAddPermissionRequest struct {
	QueryParams PostAddPermissionQueryParams
	Headers     PostAddPermissionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddPermissionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
