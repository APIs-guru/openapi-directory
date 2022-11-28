from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyClusterSnapshotScheduleActionEnum(str, Enum):
    MODIFY_CLUSTER_SNAPSHOT_SCHEDULE = "ModifyClusterSnapshotSchedule"

class GetModifyClusterSnapshotScheduleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyClusterSnapshotScheduleQueryParams:
    action: GetModifyClusterSnapshotScheduleActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyClusterSnapshotScheduleVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    disassociate_schedule: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DisassociateSchedule', 'style': 'form', 'explode': True }})
    schedule_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ScheduleIdentifier', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyClusterSnapshotScheduleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyClusterSnapshotScheduleRequest:
    headers: GetModifyClusterSnapshotScheduleHeaders = field()
    query_params: GetModifyClusterSnapshotScheduleQueryParams = field()
    

@dataclass
class GetModifyClusterSnapshotScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
