from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetAlarmStateActionEnum(str, Enum):
    SET_ALARM_STATE = "SetAlarmState"

class GetSetAlarmStateStateValueEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

class GetSetAlarmStateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetSetAlarmStateQueryParams:
    action: GetSetAlarmStateActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    alarm_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AlarmName', 'style': 'form', 'explode': True }})
    state_reason: str = field(default=None, metadata={'query_param': { 'field_name': 'StateReason', 'style': 'form', 'explode': True }})
    state_reason_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StateReasonData', 'style': 'form', 'explode': True }})
    state_value: GetSetAlarmStateStateValueEnum = field(default=None, metadata={'query_param': { 'field_name': 'StateValue', 'style': 'form', 'explode': True }})
    version: GetSetAlarmStateVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetAlarmStateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetAlarmStateRequest:
    query_params: GetSetAlarmStateQueryParams = field(default=None)
    headers: GetSetAlarmStateHeaders = field(default=None)
    

@dataclass
class GetSetAlarmStateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
