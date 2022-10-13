package operations

type GetRemoveRoleFromDbInstanceActionEnum string

const (
	GetRemoveRoleFromDbInstanceActionEnumRemoveRoleFromDbInstance GetRemoveRoleFromDbInstanceActionEnum = "RemoveRoleFromDBInstance"
)

type GetRemoveRoleFromDbInstanceVersionEnum string

const (
	GetRemoveRoleFromDbInstanceVersionEnumTwoThousandAndFourteen1031 GetRemoveRoleFromDbInstanceVersionEnum = "2014-10-31"
)

type GetRemoveRoleFromDbInstanceQueryParams struct {
	Action               GetRemoveRoleFromDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier string                                 `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	FeatureName          string                                 `queryParam:"style=form,explode=true,name=FeatureName"`
	RoleArn              string                                 `queryParam:"style=form,explode=true,name=RoleArn"`
	Version              GetRemoveRoleFromDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRemoveRoleFromDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRemoveRoleFromDbInstanceRequest struct {
	QueryParams GetRemoveRoleFromDbInstanceQueryParams
	Headers     GetRemoveRoleFromDbInstanceHeaders
}

type GetRemoveRoleFromDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
