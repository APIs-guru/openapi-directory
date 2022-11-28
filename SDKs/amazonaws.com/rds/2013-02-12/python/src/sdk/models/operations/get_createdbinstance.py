from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetCreateDbInstanceActionEnum(str, Enum):
    CREATE_DB_INSTANCE = "CreateDBInstance"

class GetCreateDbInstanceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetCreateDbInstanceQueryParams:
    action: GetCreateDbInstanceActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    allocated_storage: int = field(metadata={'query_param': { 'field_name': 'AllocatedStorage', 'style': 'form', 'explode': True }})
    db_instance_class: str = field(metadata={'query_param': { 'field_name': 'DBInstanceClass', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = field(metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    engine: str = field(metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    master_user_password: str = field(metadata={'query_param': { 'field_name': 'MasterUserPassword', 'style': 'form', 'explode': True }})
    master_username: str = field(metadata={'query_param': { 'field_name': 'MasterUsername', 'style': 'form', 'explode': True }})
    version: GetCreateDbInstanceVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AutoMinorVersionUpgrade', 'style': 'form', 'explode': True }})
    availability_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    backup_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'BackupRetentionPeriod', 'style': 'form', 'explode': True }})
    character_set_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CharacterSetName', 'style': 'form', 'explode': True }})
    db_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBName', 'style': 'form', 'explode': True }})
    db_parameter_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBParameterGroupName', 'style': 'form', 'explode': True }})
    db_security_groups: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'DBSecurityGroups', 'style': 'form', 'explode': True }})
    db_subnet_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupName', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    iops: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Iops', 'style': 'form', 'explode': True }})
    license_model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LicenseModel', 'style': 'form', 'explode': True }})
    multi_az: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'MultiAZ', 'style': 'form', 'explode': True }})
    option_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredBackupWindow', 'style': 'form', 'explode': True }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredMaintenanceWindow', 'style': 'form', 'explode': True }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'PubliclyAccessible', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateDbInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateDbInstanceRequest:
    headers: GetCreateDbInstanceHeaders = field()
    query_params: GetCreateDbInstanceQueryParams = field()
    

@dataclass
class GetCreateDbInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
