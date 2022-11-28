from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateDbInstanceReadReplicaActionEnum(str, Enum):
    CREATE_DB_INSTANCE_READ_REPLICA = "CreateDBInstanceReadReplica"

class GetCreateDbInstanceReadReplicaVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetCreateDbInstanceReadReplicaQueryParams:
    action: GetCreateDbInstanceReadReplicaActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = field(metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    source_db_instance_identifier: str = field(metadata={'query_param': { 'field_name': 'SourceDBInstanceIdentifier', 'style': 'form', 'explode': True }})
    version: GetCreateDbInstanceReadReplicaVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AutoMinorVersionUpgrade', 'style': 'form', 'explode': True }})
    availability_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    db_instance_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceClass', 'style': 'form', 'explode': True }})
    iops: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Iops', 'style': 'form', 'explode': True }})
    option_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'PubliclyAccessible', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateDbInstanceReadReplicaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateDbInstanceReadReplicaRequest:
    headers: GetCreateDbInstanceReadReplicaHeaders = field()
    query_params: GetCreateDbInstanceReadReplicaQueryParams = field()
    

@dataclass
class GetCreateDbInstanceReadReplicaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
