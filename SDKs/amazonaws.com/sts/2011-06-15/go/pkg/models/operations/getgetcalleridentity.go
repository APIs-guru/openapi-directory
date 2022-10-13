package operations

type GetGetCallerIdentityActionEnum string

const (
	GetGetCallerIdentityActionEnumGetCallerIdentity GetGetCallerIdentityActionEnum = "GetCallerIdentity"
)

type GetGetCallerIdentityVersionEnum string

const (
	GetGetCallerIdentityVersionEnumTwoThousandAndEleven0615 GetGetCallerIdentityVersionEnum = "2011-06-15"
)

type GetGetCallerIdentityQueryParams struct {
	Action  GetGetCallerIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetGetCallerIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetCallerIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetCallerIdentityRequest struct {
	QueryParams GetGetCallerIdentityQueryParams
	Headers     GetGetCallerIdentityHeaders
}

type GetGetCallerIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
