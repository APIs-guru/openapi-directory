package operations

type GetDeleteCustomAvailabilityZoneActionEnum string

const (
	GetDeleteCustomAvailabilityZoneActionEnumDeleteCustomAvailabilityZone GetDeleteCustomAvailabilityZoneActionEnum = "DeleteCustomAvailabilityZone"
)

type GetDeleteCustomAvailabilityZoneVersionEnum string

const (
	GetDeleteCustomAvailabilityZoneVersionEnumTwoThousandAndFourteen1031 GetDeleteCustomAvailabilityZoneVersionEnum = "2014-10-31"
)

type GetDeleteCustomAvailabilityZoneQueryParams struct {
	Action                   GetDeleteCustomAvailabilityZoneActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CustomAvailabilityZoneID string                                     `queryParam:"style=form,explode=true,name=CustomAvailabilityZoneId"`
	Version                  GetDeleteCustomAvailabilityZoneVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteCustomAvailabilityZoneHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteCustomAvailabilityZoneRequest struct {
	QueryParams GetDeleteCustomAvailabilityZoneQueryParams
	Headers     GetDeleteCustomAvailabilityZoneHeaders
}

type GetDeleteCustomAvailabilityZoneResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
