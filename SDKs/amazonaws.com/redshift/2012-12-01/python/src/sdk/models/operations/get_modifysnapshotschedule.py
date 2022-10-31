from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifySnapshotScheduleActionEnum(str, Enum):
    MODIFY_SNAPSHOT_SCHEDULE = "ModifySnapshotSchedule"

class GetModifySnapshotScheduleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifySnapshotScheduleQueryParams:
    action: GetModifySnapshotScheduleActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    schedule_definitions: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ScheduleDefinitions', 'style': 'form', 'explode': True }})
    schedule_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ScheduleIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifySnapshotScheduleVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifySnapshotScheduleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifySnapshotScheduleRequest:
    query_params: GetModifySnapshotScheduleQueryParams = field(default=None)
    headers: GetModifySnapshotScheduleHeaders = field(default=None)
    

@dataclass
class GetModifySnapshotScheduleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
