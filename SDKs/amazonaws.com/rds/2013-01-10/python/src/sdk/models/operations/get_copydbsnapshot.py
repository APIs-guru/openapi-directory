from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCopyDbSnapshotActionEnum(str, Enum):
    COPY_DB_SNAPSHOT = "CopyDBSnapshot"

class GetCopyDbSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetCopyDbSnapshotQueryParams:
    action: GetCopyDbSnapshotActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_db_snapshot_identifier: str = field(metadata={'query_param': { 'field_name': 'SourceDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    target_db_snapshot_identifier: str = field(metadata={'query_param': { 'field_name': 'TargetDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetCopyDbSnapshotVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCopyDbSnapshotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCopyDbSnapshotRequest:
    headers: GetCopyDbSnapshotHeaders = field()
    query_params: GetCopyDbSnapshotQueryParams = field()
    

@dataclass
class GetCopyDbSnapshotResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
