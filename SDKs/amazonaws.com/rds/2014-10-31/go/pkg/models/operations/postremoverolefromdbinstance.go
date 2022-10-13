package operations

type PostRemoveRoleFromDbInstanceActionEnum string

const (
	PostRemoveRoleFromDbInstanceActionEnumRemoveRoleFromDbInstance PostRemoveRoleFromDbInstanceActionEnum = "RemoveRoleFromDBInstance"
)

type PostRemoveRoleFromDbInstanceVersionEnum string

const (
	PostRemoveRoleFromDbInstanceVersionEnumTwoThousandAndFourteen1031 PostRemoveRoleFromDbInstanceVersionEnum = "2014-10-31"
)

type PostRemoveRoleFromDbInstanceQueryParams struct {
	Action  PostRemoveRoleFromDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveRoleFromDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveRoleFromDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRemoveRoleFromDbInstanceRequest struct {
	QueryParams PostRemoveRoleFromDbInstanceQueryParams
	Headers     PostRemoveRoleFromDbInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveRoleFromDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
