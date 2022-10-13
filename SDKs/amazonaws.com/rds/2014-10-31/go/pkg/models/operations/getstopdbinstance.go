package operations

type GetStopDbInstanceActionEnum string

const (
	GetStopDbInstanceActionEnumStopDbInstance GetStopDbInstanceActionEnum = "StopDBInstance"
)

type GetStopDbInstanceVersionEnum string

const (
	GetStopDbInstanceVersionEnumTwoThousandAndFourteen1031 GetStopDbInstanceVersionEnum = "2014-10-31"
)

type GetStopDbInstanceQueryParams struct {
	Action               GetStopDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier string                       `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	DbSnapshotIdentifier *string                      `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	Version              GetStopDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStopDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStopDbInstanceRequest struct {
	QueryParams GetStopDbInstanceQueryParams
	Headers     GetStopDbInstanceHeaders
}

type GetStopDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
