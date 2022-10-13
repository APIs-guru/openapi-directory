package operations

type GetModifyDbInstanceActionEnum string

const (
	GetModifyDbInstanceActionEnumModifyDbInstance GetModifyDbInstanceActionEnum = "ModifyDBInstance"
)

type GetModifyDbInstanceVersionEnum string

const (
	GetModifyDbInstanceVersionEnumTwoThousandAndThirteen0909 GetModifyDbInstanceVersionEnum = "2013-09-09"
)

type GetModifyDbInstanceQueryParams struct {
	Action                     GetModifyDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AllocatedStorage           *int64                         `queryParam:"style=form,explode=true,name=AllocatedStorage"`
	AllowMajorVersionUpgrade   *bool                          `queryParam:"style=form,explode=true,name=AllowMajorVersionUpgrade"`
	ApplyImmediately           *bool                          `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	AutoMinorVersionUpgrade    *bool                          `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
	BackupRetentionPeriod      *int64                         `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
	DbInstanceClass            *string                        `queryParam:"style=form,explode=true,name=DBInstanceClass"`
	DbInstanceIdentifier       string                         `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	DbParameterGroupName       *string                        `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	DbSecurityGroups           []string                       `queryParam:"style=form,explode=true,name=DBSecurityGroups"`
	EngineVersion              *string                        `queryParam:"style=form,explode=true,name=EngineVersion"`
	Iops                       *int64                         `queryParam:"style=form,explode=true,name=Iops"`
	MasterUserPassword         *string                        `queryParam:"style=form,explode=true,name=MasterUserPassword"`
	MultiAz                    *bool                          `queryParam:"style=form,explode=true,name=MultiAZ"`
	NewDbInstanceIdentifier    *string                        `queryParam:"style=form,explode=true,name=NewDBInstanceIdentifier"`
	OptionGroupName            *string                        `queryParam:"style=form,explode=true,name=OptionGroupName"`
	PreferredBackupWindow      *string                        `queryParam:"style=form,explode=true,name=PreferredBackupWindow"`
	PreferredMaintenanceWindow *string                        `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
	Version                    GetModifyDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcSecurityGroupIds        []string                       `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
}

type GetModifyDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyDbInstanceRequest struct {
	QueryParams GetModifyDbInstanceQueryParams
	Headers     GetModifyDbInstanceHeaders
}

type GetModifyDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
