from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyClusterSnapshotScheduleActionEnum(str, Enum):
    MODIFY_CLUSTER_SNAPSHOT_SCHEDULE = "ModifyClusterSnapshotSchedule"

class GetModifyClusterSnapshotScheduleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyClusterSnapshotScheduleQueryParams:
    action: GetModifyClusterSnapshotScheduleActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    disassociate_schedule: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DisassociateSchedule', 'style': 'form', 'explode': True }})
    schedule_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ScheduleIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyClusterSnapshotScheduleVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyClusterSnapshotScheduleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyClusterSnapshotScheduleRequest:
    query_params: GetModifyClusterSnapshotScheduleQueryParams = field(default=None)
    headers: GetModifyClusterSnapshotScheduleHeaders = field(default=None)
    

@dataclass
class GetModifyClusterSnapshotScheduleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
