from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyDbInstanceActionEnum(str, Enum):
    MODIFY_DB_INSTANCE = "ModifyDBInstance"


@dataclass
class GetModifyDbInstanceCloudwatchLogsExportConfiguration:
    disable_log_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DisableLogTypes' }})
    enable_log_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EnableLogTypes' }})
    
class GetModifyDbInstanceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbInstanceQueryParams:
    action: GetModifyDbInstanceActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    allocated_storage: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'AllocatedStorage', 'style': 'form', 'explode': True }})
    allow_major_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowMajorVersionUpgrade', 'style': 'form', 'explode': True }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AutoMinorVersionUpgrade', 'style': 'form', 'explode': True }})
    backup_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'BackupRetentionPeriod', 'style': 'form', 'explode': True }})
    ca_certificate_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CACertificateIdentifier', 'style': 'form', 'explode': True }})
    cloudwatch_logs_export_configuration: Optional[GetModifyDbInstanceCloudwatchLogsExportConfiguration] = field(default=None, metadata={'query_param': { 'field_name': 'CloudwatchLogsExportConfiguration', 'style': 'form', 'explode': True }})
    copy_tags_to_snapshot: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'CopyTagsToSnapshot', 'style': 'form', 'explode': True }})
    db_instance_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceClass', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    db_parameter_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBParameterGroupName', 'style': 'form', 'explode': True }})
    db_port_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DBPortNumber', 'style': 'form', 'explode': True }})
    db_security_groups: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DBSecurityGroups', 'style': 'form', 'explode': True }})
    db_subnet_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupName', 'style': 'form', 'explode': True }})
    deletion_protection: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeletionProtection', 'style': 'form', 'explode': True }})
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Domain', 'style': 'form', 'explode': True }})
    domain_iam_role_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DomainIAMRoleName', 'style': 'form', 'explode': True }})
    enable_iam_database_authentication: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnableIAMDatabaseAuthentication', 'style': 'form', 'explode': True }})
    enable_performance_insights: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnablePerformanceInsights', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    iops: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Iops', 'style': 'form', 'explode': True }})
    license_model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LicenseModel', 'style': 'form', 'explode': True }})
    master_user_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MasterUserPassword', 'style': 'form', 'explode': True }})
    monitoring_interval: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MonitoringInterval', 'style': 'form', 'explode': True }})
    monitoring_role_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MonitoringRoleArn', 'style': 'form', 'explode': True }})
    multi_az: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'MultiAZ', 'style': 'form', 'explode': True }})
    new_db_instance_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewDBInstanceIdentifier', 'style': 'form', 'explode': True }})
    option_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    performance_insights_kms_key_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PerformanceInsightsKMSKeyId', 'style': 'form', 'explode': True }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredBackupWindow', 'style': 'form', 'explode': True }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredMaintenanceWindow', 'style': 'form', 'explode': True }})
    promotion_tier: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PromotionTier', 'style': 'form', 'explode': True }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'PubliclyAccessible', 'style': 'form', 'explode': True }})
    storage_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StorageType', 'style': 'form', 'explode': True }})
    tde_credential_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TdeCredentialArn', 'style': 'form', 'explode': True }})
    tde_credential_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TdeCredentialPassword', 'style': 'form', 'explode': True }})
    version: GetModifyDbInstanceVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyDbInstanceRequest:
    query_params: GetModifyDbInstanceQueryParams = field(default=None)
    headers: GetModifyDbInstanceHeaders = field(default=None)
    

@dataclass
class GetModifyDbInstanceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
