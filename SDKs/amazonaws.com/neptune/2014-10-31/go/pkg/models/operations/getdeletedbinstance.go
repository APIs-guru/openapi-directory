package operations

type GetDeleteDbInstanceActionEnum string

const (
	GetDeleteDbInstanceActionEnumDeleteDbInstance GetDeleteDbInstanceActionEnum = "DeleteDBInstance"
)

type GetDeleteDbInstanceVersionEnum string

const (
	GetDeleteDbInstanceVersionEnumTwoThousandAndFourteen1031 GetDeleteDbInstanceVersionEnum = "2014-10-31"
)

type GetDeleteDbInstanceQueryParams struct {
	Action                    GetDeleteDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier      string                         `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	FinalDbSnapshotIdentifier *string                        `queryParam:"style=form,explode=true,name=FinalDBSnapshotIdentifier"`
	SkipFinalSnapshot         *bool                          `queryParam:"style=form,explode=true,name=SkipFinalSnapshot"`
	Version                   GetDeleteDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbInstanceRequest struct {
	QueryParams GetDeleteDbInstanceQueryParams
	Headers     GetDeleteDbInstanceHeaders
}

type GetDeleteDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
