package operations

type GetModifyDbClusterActionEnum string

const (
	GetModifyDbClusterActionEnumModifyDbCluster GetModifyDbClusterActionEnum = "ModifyDBCluster"
)

// GetModifyDbClusterCloudwatchLogsExportConfiguration
// <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
type GetModifyDbClusterCloudwatchLogsExportConfiguration struct {
	DisableLogTypes []string `queryParam:"name=DisableLogTypes"`
	EnableLogTypes  []string `queryParam:"name=EnableLogTypes"`
}

type GetModifyDbClusterVersionEnum string

const (
	GetModifyDbClusterVersionEnumTwoThousandAndFourteen1031 GetModifyDbClusterVersionEnum = "2014-10-31"
)

type GetModifyDbClusterQueryParams struct {
	Action                            GetModifyDbClusterActionEnum                         `queryParam:"style=form,explode=true,name=Action"`
	ApplyImmediately                  *bool                                                `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	BackupRetentionPeriod             *int64                                               `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
	CloudwatchLogsExportConfiguration *GetModifyDbClusterCloudwatchLogsExportConfiguration `queryParam:"style=form,explode=true,name=CloudwatchLogsExportConfiguration"`
	CopyTagsToSnapshot                *bool                                                `queryParam:"style=form,explode=true,name=CopyTagsToSnapshot"`
	DbClusterIdentifier               string                                               `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	DbClusterParameterGroupName       *string                                              `queryParam:"style=form,explode=true,name=DBClusterParameterGroupName"`
	DeletionProtection                *bool                                                `queryParam:"style=form,explode=true,name=DeletionProtection"`
	EnableIamDatabaseAuthentication   *bool                                                `queryParam:"style=form,explode=true,name=EnableIAMDatabaseAuthentication"`
	EngineVersion                     *string                                              `queryParam:"style=form,explode=true,name=EngineVersion"`
	MasterUserPassword                *string                                              `queryParam:"style=form,explode=true,name=MasterUserPassword"`
	NewDbClusterIdentifier            *string                                              `queryParam:"style=form,explode=true,name=NewDBClusterIdentifier"`
	OptionGroupName                   *string                                              `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Port                              *int64                                               `queryParam:"style=form,explode=true,name=Port"`
	PreferredBackupWindow             *string                                              `queryParam:"style=form,explode=true,name=PreferredBackupWindow"`
	PreferredMaintenanceWindow        *string                                              `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
	Version                           GetModifyDbClusterVersionEnum                        `queryParam:"style=form,explode=true,name=Version"`
	VpcSecurityGroupIds               []string                                             `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
}

type GetModifyDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
