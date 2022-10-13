package operations

type GetAddRoleToDbInstanceActionEnum string

const (
	GetAddRoleToDbInstanceActionEnumAddRoleToDbInstance GetAddRoleToDbInstanceActionEnum = "AddRoleToDBInstance"
)

type GetAddRoleToDbInstanceVersionEnum string

const (
	GetAddRoleToDbInstanceVersionEnumTwoThousandAndFourteen1031 GetAddRoleToDbInstanceVersionEnum = "2014-10-31"
)

type GetAddRoleToDbInstanceQueryParams struct {
	Action               GetAddRoleToDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier string                            `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	FeatureName          string                            `queryParam:"style=form,explode=true,name=FeatureName"`
	RoleArn              string                            `queryParam:"style=form,explode=true,name=RoleArn"`
	Version              GetAddRoleToDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAddRoleToDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAddRoleToDbInstanceRequest struct {
	QueryParams GetAddRoleToDbInstanceQueryParams
	Headers     GetAddRoleToDbInstanceHeaders
}

type GetAddRoleToDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
