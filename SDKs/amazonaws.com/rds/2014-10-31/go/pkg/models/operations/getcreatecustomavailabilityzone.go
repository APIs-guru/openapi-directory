package operations

type GetCreateCustomAvailabilityZoneActionEnum string

const (
	GetCreateCustomAvailabilityZoneActionEnumCreateCustomAvailabilityZone GetCreateCustomAvailabilityZoneActionEnum = "CreateCustomAvailabilityZone"
)

type GetCreateCustomAvailabilityZoneVersionEnum string

const (
	GetCreateCustomAvailabilityZoneVersionEnumTwoThousandAndFourteen1031 GetCreateCustomAvailabilityZoneVersionEnum = "2014-10-31"
)

type GetCreateCustomAvailabilityZoneQueryParams struct {
	Action                     GetCreateCustomAvailabilityZoneActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CustomAvailabilityZoneName string                                     `queryParam:"style=form,explode=true,name=CustomAvailabilityZoneName"`
	ExistingVpnID              *string                                    `queryParam:"style=form,explode=true,name=ExistingVpnId"`
	NewVpnTunnelName           *string                                    `queryParam:"style=form,explode=true,name=NewVpnTunnelName"`
	Version                    GetCreateCustomAvailabilityZoneVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpnTunnelOriginatorIP      *string                                    `queryParam:"style=form,explode=true,name=VpnTunnelOriginatorIP"`
}

type GetCreateCustomAvailabilityZoneHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateCustomAvailabilityZoneRequest struct {
	QueryParams GetCreateCustomAvailabilityZoneQueryParams
	Headers     GetCreateCustomAvailabilityZoneHeaders
}

type GetCreateCustomAvailabilityZoneResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
