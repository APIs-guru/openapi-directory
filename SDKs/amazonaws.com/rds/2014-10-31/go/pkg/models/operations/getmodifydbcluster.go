package operations

type GetModifyDbClusterActionEnum string

const (
	GetModifyDbClusterActionEnumModifyDbCluster GetModifyDbClusterActionEnum = "ModifyDBCluster"
)

// GetModifyDbClusterCloudwatchLogsExportConfiguration
// <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.</p> <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
type GetModifyDbClusterCloudwatchLogsExportConfiguration struct {
	DisableLogTypes []string `queryParam:"name=DisableLogTypes"`
	EnableLogTypes  []string `queryParam:"name=EnableLogTypes"`
}

// GetModifyDbClusterScalingConfiguration
// <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
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
