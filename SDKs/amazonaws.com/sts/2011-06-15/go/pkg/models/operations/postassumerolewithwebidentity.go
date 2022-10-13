package operations

type PostAssumeRoleWithWebIdentityActionEnum string

const (
	PostAssumeRoleWithWebIdentityActionEnumAssumeRoleWithWebIdentity PostAssumeRoleWithWebIdentityActionEnum = "AssumeRoleWithWebIdentity"
)

type PostAssumeRoleWithWebIdentityVersionEnum string

const (
	PostAssumeRoleWithWebIdentityVersionEnumTwoThousandAndEleven0615 PostAssumeRoleWithWebIdentityVersionEnum = "2011-06-15"
)

type PostAssumeRoleWithWebIdentityQueryParams struct {
	Action  PostAssumeRoleWithWebIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssumeRoleWithWebIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssumeRoleWithWebIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssumeRoleWithWebIdentityRequest struct {
	QueryParams PostAssumeRoleWithWebIdentityQueryParams
	Headers     PostAssumeRoleWithWebIdentityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssumeRoleWithWebIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
