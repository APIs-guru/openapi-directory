package operations

type PostDescribeCustomAvailabilityZonesActionEnum string

const (
	PostDescribeCustomAvailabilityZonesActionEnumDescribeCustomAvailabilityZones PostDescribeCustomAvailabilityZonesActionEnum = "DescribeCustomAvailabilityZones"
)

type PostDescribeCustomAvailabilityZonesVersionEnum string

const (
	PostDescribeCustomAvailabilityZonesVersionEnumTwoThousandAndFourteen1031 PostDescribeCustomAvailabilityZonesVersionEnum = "2014-10-31"
)

type PostDescribeCustomAvailabilityZonesQueryParams struct {
	Action     PostDescribeCustomAvailabilityZonesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                        `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeCustomAvailabilityZonesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCustomAvailabilityZonesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeCustomAvailabilityZonesRequest struct {
	QueryParams PostDescribeCustomAvailabilityZonesQueryParams
	Headers     PostDescribeCustomAvailabilityZonesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCustomAvailabilityZonesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
