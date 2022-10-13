package operations

type PostDescribeInstallationMediaActionEnum string

const (
	PostDescribeInstallationMediaActionEnumDescribeInstallationMedia PostDescribeInstallationMediaActionEnum = "DescribeInstallationMedia"
)

type PostDescribeInstallationMediaVersionEnum string

const (
	PostDescribeInstallationMediaVersionEnumTwoThousandAndFourteen1031 PostDescribeInstallationMediaVersionEnum = "2014-10-31"
)

type PostDescribeInstallationMediaQueryParams struct {
	Action     PostDescribeInstallationMediaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeInstallationMediaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeInstallationMediaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeInstallationMediaRequest struct {
	QueryParams PostDescribeInstallationMediaQueryParams
	Headers     PostDescribeInstallationMediaHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeInstallationMediaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
