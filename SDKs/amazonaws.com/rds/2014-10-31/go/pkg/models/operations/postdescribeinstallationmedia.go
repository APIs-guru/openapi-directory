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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
