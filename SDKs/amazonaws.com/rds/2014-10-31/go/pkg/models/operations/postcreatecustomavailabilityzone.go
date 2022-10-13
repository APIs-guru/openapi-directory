package operations

type PostCreateCustomAvailabilityZoneActionEnum string

const (
	PostCreateCustomAvailabilityZoneActionEnumCreateCustomAvailabilityZone PostCreateCustomAvailabilityZoneActionEnum = "CreateCustomAvailabilityZone"
)

type PostCreateCustomAvailabilityZoneVersionEnum string

const (
	PostCreateCustomAvailabilityZoneVersionEnumTwoThousandAndFourteen1031 PostCreateCustomAvailabilityZoneVersionEnum = "2014-10-31"
)

type PostCreateCustomAvailabilityZoneQueryParams struct {
	Action  PostCreateCustomAvailabilityZoneActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCustomAvailabilityZoneVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCustomAvailabilityZoneHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCustomAvailabilityZoneRequest struct {
	QueryParams PostCreateCustomAvailabilityZoneQueryParams
	Headers     PostCreateCustomAvailabilityZoneHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCustomAvailabilityZoneResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
