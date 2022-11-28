from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyDbClusterActionEnum(str, Enum):
    MODIFY_DB_CLUSTER = "ModifyDBCluster"


@dataclass
class GetModifyDbClusterCloudwatchLogsExportConfiguration:
    r"""GetModifyDbClusterCloudwatchLogsExportConfiguration
    <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.</p> <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
    """
    
    disable_log_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DisableLogTypes' }})
    enable_log_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EnableLogTypes' }})
    

@dataclass
class GetModifyDbClusterScalingConfiguration:
    r"""GetModifyDbClusterScalingConfiguration
    <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
    """
    
    auto_pause: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AutoPause' }})
    max_capacity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxCapacity' }})
    min_capacity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MinCapacity' }})
    seconds_before_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'SecondsBeforeTimeout' }})
    seconds_until_auto_pause: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'SecondsUntilAutoPause' }})
    timeout_action: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TimeoutAction' }})
    
class GetModifyDbClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbClusterQueryParams:
    action: GetModifyDbClusterActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyDbClusterVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    allow_major_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowMajorVersionUpgrade', 'style': 'form', 'explode': True }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    backtrack_window: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'BacktrackWindow', 'style': 'form', 'explode': True }})
    backup_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'BackupRetentionPeriod', 'style': 'form', 'explode': True }})
    cloudwatch_logs_export_configuration: Optional[GetModifyDbClusterCloudwatchLogsExportConfiguration] = field(default=None, metadata={'query_param': { 'field_name': 'CloudwatchLogsExportConfiguration', 'style': 'form', 'explode': True }})
    copy_tags_to_snapshot: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'CopyTagsToSnapshot', 'style': 'form', 'explode': True }})
    db_cluster_parameter_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterParameterGroupName', 'style': 'form', 'explode': True }})
    db_instance_parameter_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceParameterGroupName', 'style': 'form', 'explode': True }})
    deletion_protection: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeletionProtection', 'style': 'form', 'explode': True }})
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Domain', 'style': 'form', 'explode': True }})
    domain_iam_role_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DomainIAMRoleName', 'style': 'form', 'explode': True }})
    enable_global_write_forwarding: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnableGlobalWriteForwarding', 'style': 'form', 'explode': True }})
    enable_http_endpoint: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnableHttpEndpoint', 'style': 'form', 'explode': True }})
    enable_iam_database_authentication: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnableIAMDatabaseAuthentication', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    master_user_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MasterUserPassword', 'style': 'form', 'explode': True }})
    new_db_cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewDBClusterIdentifier', 'style': 'form', 'explode': True }})
    option_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredBackupWindow', 'style': 'form', 'explode': True }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredMaintenanceWindow', 'style': 'form', 'explode': True }})
    scaling_configuration: Optional[GetModifyDbClusterScalingConfiguration] = field(default=None, metadata={'query_param': { 'field_name': 'ScalingConfiguration', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbClusterRequest:
    headers: GetModifyDbClusterHeaders = field()
    query_params: GetModifyDbClusterQueryParams = field()
    

@dataclass
class GetModifyDbClusterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
