package operations

type PostAssumeRoleWithSamlActionEnum string

const (
	PostAssumeRoleWithSamlActionEnumAssumeRoleWithSaml PostAssumeRoleWithSamlActionEnum = "AssumeRoleWithSAML"
)

type PostAssumeRoleWithSamlVersionEnum string

const (
	PostAssumeRoleWithSamlVersionEnumTwoThousandAndEleven0615 PostAssumeRoleWithSamlVersionEnum = "2011-06-15"
)

type PostAssumeRoleWithSamlQueryParams struct {
	Action  PostAssumeRoleWithSamlActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssumeRoleWithSamlVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssumeRoleWithSamlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssumeRoleWithSamlRequest struct {
	QueryParams PostAssumeRoleWithSamlQueryParams
	Headers     PostAssumeRoleWithSamlHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssumeRoleWithSamlResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
