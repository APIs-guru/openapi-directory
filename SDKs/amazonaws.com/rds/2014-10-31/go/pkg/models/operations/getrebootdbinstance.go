package operations

type GetRebootDbInstanceActionEnum string

const (
	GetRebootDbInstanceActionEnumRebootDbInstance GetRebootDbInstanceActionEnum = "RebootDBInstance"
)

type GetRebootDbInstanceVersionEnum string

const (
	GetRebootDbInstanceVersionEnumTwoThousandAndFourteen1031 GetRebootDbInstanceVersionEnum = "2014-10-31"
)

type GetRebootDbInstanceQueryParams struct {
	Action               GetRebootDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier string                         `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	ForceFailover        *bool                          `queryParam:"style=form,explode=true,name=ForceFailover"`
	Version              GetRebootDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRebootDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRebootDbInstanceRequest struct {
	QueryParams GetRebootDbInstanceQueryParams
	Headers     GetRebootDbInstanceHeaders
}

type GetRebootDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
