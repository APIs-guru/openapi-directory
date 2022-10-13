package operations

type GetModifyDbClusterActionEnum string

const (
	GetModifyDbClusterActionEnumModifyDbCluster GetModifyDbClusterActionEnum = "ModifyDBCluster"
)

type GetModifyDbClusterCloudwatchLogsExportConfiguration struct {
	DisableLogTypes []string `queryParam:"name=DisableLogTypes"`
	EnableLogTypes  []string `queryParam:"name=EnableLogTypes"`
}

type GetModifyDbClusterScalingConfiguration struct {
	AutoPause             *bool   `queryParam:"name=AutoPause"`
	MaxCapacity           *int64  `queryParam:"name=MaxCapacity"`
	MinCapacity           *int64  `queryParam:"name=MinCapacity"`
	SecondsBeforeTimeout  *int64  `queryParam:"name=SecondsBeforeTimeout"`
	SecondsUntilAutoPause *int64  `queryParam:"name=SecondsUntilAutoPause"`
	TimeoutAction         *string `queryParam:"name=TimeoutAction"`
}

type GetModifyDbClusterVersionEnum string

const (
	GetModifyDbClusterVersionEnumTwoThousandAndFourteen1031 GetModifyDbClusterVersionEnum = "2014-10-31"
)

type GetModifyDbClusterQueryParams struct {
	Action                            GetModifyDbClusterActionEnum                         `queryParam:"style=form,explode=true,name=Action"`
	AllowMajorVersionUpgrade          *bool                                                `queryParam:"style=form,explode=true,name=AllowMajorVersionUpgrade"`
	ApplyImmediately                  *bool                                                `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	BacktrackWindow                   *int64                                               `queryParam:"style=form,explode=true,name=BacktrackWindow"`
	BackupRetentionPeriod             *int64                                               `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
	CloudwatchLogsExportConfiguration *GetModifyDbClusterCloudwatchLogsExportConfiguration `queryParam:"style=form,explode=true,name=CloudwatchLogsExportConfiguration"`
	CopyTagsToSnapshot                *bool                                                `queryParam:"style=form,explode=true,name=CopyTagsToSnapshot"`
	DbClusterIdentifier               string                                               `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	DbClusterParameterGroupName       *string                                              `queryParam:"style=form,explode=true,name=DBClusterParameterGroupName"`
	DbInstanceParameterGroupName      *string                                              `queryParam:"style=form,explode=true,name=DBInstanceParameterGroupName"`
	DeletionProtection                *bool                                                `queryParam:"style=form,explode=true,name=DeletionProtection"`
	Domain                            *string                                              `queryParam:"style=form,explode=true,name=Domain"`
	DomainIamRoleName                 *string                                              `queryParam:"style=form,explode=true,name=DomainIAMRoleName"`
	EnableGlobalWriteForwarding       *bool                                                `queryParam:"style=form,explode=true,name=EnableGlobalWriteForwarding"`
	EnableHTTPEndpoint                *bool                                                `queryParam:"style=form,explode=true,name=EnableHttpEndpoint"`
	EnableIamDatabaseAuthentication   *bool                                                `queryParam:"style=form,explode=true,name=EnableIAMDatabaseAuthentication"`
	EngineVersion                     *string                                              `queryParam:"style=form,explode=true,name=EngineVersion"`
	MasterUserPassword                *string                                              `queryParam:"style=form,explode=true,name=MasterUserPassword"`
	NewDbClusterIdentifier            *string                                              `queryParam:"style=form,explode=true,name=NewDBClusterIdentifier"`
	OptionGroupName                   *string                                              `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Port                              *int64                                               `queryParam:"style=form,explode=true,name=Port"`
	PreferredBackupWindow             *string                                              `queryParam:"style=form,explode=true,name=PreferredBackupWindow"`
	PreferredMaintenanceWindow        *string                                              `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
	ScalingConfiguration              *GetModifyDbClusterScalingConfiguration              `queryParam:"style=form,explode=true,name=ScalingConfiguration"`
	Version                           GetModifyDbClusterVersionEnum                        `queryParam:"style=form,explode=true,name=Version"`
	VpcSecurityGroupIds               []string                                             `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
}

type GetModifyDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyDbClusterRequest struct {
	QueryParams GetModifyDbClusterQueryParams
	Headers     GetModifyDbClusterHeaders
}

type GetModifyDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
