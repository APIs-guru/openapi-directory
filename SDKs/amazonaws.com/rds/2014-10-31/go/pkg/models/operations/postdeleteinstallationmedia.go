package operations

type PostDeleteInstallationMediaActionEnum string

const (
	PostDeleteInstallationMediaActionEnumDeleteInstallationMedia PostDeleteInstallationMediaActionEnum = "DeleteInstallationMedia"
)

type PostDeleteInstallationMediaVersionEnum string

const (
	PostDeleteInstallationMediaVersionEnumTwoThousandAndFourteen1031 PostDeleteInstallationMediaVersionEnum = "2014-10-31"
)

type PostDeleteInstallationMediaQueryParams struct {
	Action  PostDeleteInstallationMediaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteInstallationMediaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteInstallationMediaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteInstallationMediaRequest struct {
	QueryParams PostDeleteInstallationMediaQueryParams
	Headers     PostDeleteInstallationMediaHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteInstallationMediaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
