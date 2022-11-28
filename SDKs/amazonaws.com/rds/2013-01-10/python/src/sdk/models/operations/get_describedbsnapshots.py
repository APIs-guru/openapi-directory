from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeDbSnapshotsActionEnum(str, Enum):
    DESCRIBE_DB_SNAPSHOTS = "DescribeDBSnapshots"

class GetDescribeDbSnapshotsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetDescribeDbSnapshotsQueryParams:
    action: GetDescribeDbSnapshotsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeDbSnapshotsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    db_instance_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    db_snapshot_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    snapshot_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SnapshotType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeDbSnapshotsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeDbSnapshotsRequest:
    headers: GetDescribeDbSnapshotsHeaders = field()
    query_params: GetDescribeDbSnapshotsQueryParams = field()
    

@dataclass
class GetDescribeDbSnapshotsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
