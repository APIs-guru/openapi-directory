from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetDisableAlarmActionsActionEnum(str, Enum):
    DISABLE_ALARM_ACTIONS = "DisableAlarmActions"

class GetDisableAlarmActionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetDisableAlarmActionsQueryParams:
    action: GetDisableAlarmActionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    alarm_names: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'AlarmNames', 'style': 'form', 'explode': True }})
    version: GetDisableAlarmActionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDisableAlarmActionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDisableAlarmActionsRequest:
    query_params: GetDisableAlarmActionsQueryParams = field(default=None)
    headers: GetDisableAlarmActionsHeaders = field(default=None)
    

@dataclass
class GetDisableAlarmActionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
