from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteDbInstanceActionEnum(str, Enum):
    DELETE_DB_INSTANCE = "DeleteDBInstance"

class GetDeleteDbInstanceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_09_01 = "2014-09-01"


@dataclass
class GetDeleteDbInstanceQueryParams:
    action: GetDeleteDbInstanceActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = field(metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    version: GetDeleteDbInstanceVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    final_db_snapshot_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FinalDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    skip_final_snapshot: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'SkipFinalSnapshot', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteDbInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteDbInstanceRequest:
    headers: GetDeleteDbInstanceHeaders = field()
    query_params: GetDeleteDbInstanceQueryParams = field()
    

@dataclass
class GetDeleteDbInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
