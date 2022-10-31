package operations

type PostDescribeEngineDefaultParametersActionEnum string

const (
	PostDescribeEngineDefaultParametersActionEnumDescribeEngineDefaultParameters PostDescribeEngineDefaultParametersActionEnum = "DescribeEngineDefaultParameters"
)

type PostDescribeEngineDefaultParametersVersionEnum string

const (
	PostDescribeEngineDefaultParametersVersionEnumTwoThousandAndThirteen0212 PostDescribeEngineDefaultParametersVersionEnum = "2013-02-12"
)

type PostDescribeEngineDefaultParametersQueryParams struct {
	Action     PostDescribeEngineDefaultParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                        `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeEngineDefaultParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEngineDefaultParametersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeEngineDefaultParametersRequest struct {
	QueryParams PostDescribeEngineDefaultParametersQueryParams
	Headers     PostDescribeEngineDefaultParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEngineDefaultParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
