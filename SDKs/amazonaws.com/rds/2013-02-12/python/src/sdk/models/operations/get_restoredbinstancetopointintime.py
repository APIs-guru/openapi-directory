from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class GetRestoreDbInstanceToPointInTimeActionEnum(str, Enum):
    RESTORE_DB_INSTANCE_TO_POINT_IN_TIME = "RestoreDBInstanceToPointInTime"

class GetRestoreDbInstanceToPointInTimeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetRestoreDbInstanceToPointInTimeQueryParams:
    action: GetRestoreDbInstanceToPointInTimeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AutoMinorVersionUpgrade', 'style': 'form', 'explode': True }})
    availability_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    db_instance_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceClass', 'style': 'form', 'explode': True }})
    db_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBName', 'style': 'form', 'explode': True }})
    db_subnet_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBSubnetGroupName', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    iops: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Iops', 'style': 'form', 'explode': True }})
    license_model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LicenseModel', 'style': 'form', 'explode': True }})
    multi_az: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'MultiAZ', 'style': 'form', 'explode': True }})
    option_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'PubliclyAccessible', 'style': 'form', 'explode': True }})
    restore_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'RestoreTime', 'style': 'form', 'explode': True }})
    source_db_instance_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'SourceDBInstanceIdentifier', 'style': 'form', 'explode': True }})
    target_db_instance_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetDBInstanceIdentifier', 'style': 'form', 'explode': True }})
    use_latest_restorable_time: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'UseLatestRestorableTime', 'style': 'form', 'explode': True }})
    version: GetRestoreDbInstanceToPointInTimeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRestoreDbInstanceToPointInTimeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRestoreDbInstanceToPointInTimeRequest:
    query_params: GetRestoreDbInstanceToPointInTimeQueryParams = field(default=None)
    headers: GetRestoreDbInstanceToPointInTimeHeaders = field(default=None)
    

@dataclass
class GetRestoreDbInstanceToPointInTimeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
