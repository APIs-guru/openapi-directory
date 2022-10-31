from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteSnapshotScheduleActionEnum(str, Enum):
    DELETE_SNAPSHOT_SCHEDULE = "DeleteSnapshotSchedule"

class GetDeleteSnapshotScheduleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDeleteSnapshotScheduleQueryParams:
    action: GetDeleteSnapshotScheduleActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    schedule_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ScheduleIdentifier', 'style': 'form', 'explode': True }})
    version: GetDeleteSnapshotScheduleVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteSnapshotScheduleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteSnapshotScheduleRequest:
    query_params: GetDeleteSnapshotScheduleQueryParams = field(default=None)
    headers: GetDeleteSnapshotScheduleHeaders = field(default=None)
    

@dataclass
class GetDeleteSnapshotScheduleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
