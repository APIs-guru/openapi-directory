from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetDescribeAlarmsActionEnum(str, Enum):
    DESCRIBE_ALARMS = "DescribeAlarms"

class GetDescribeAlarmsStateValueEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

class GetDescribeAlarmsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetDescribeAlarmsQueryParams:
    action: GetDescribeAlarmsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    action_prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ActionPrefix', 'style': 'form', 'explode': True }})
    alarm_name_prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AlarmNamePrefix', 'style': 'form', 'explode': True }})
    alarm_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AlarmNames', 'style': 'form', 'explode': True }})
    alarm_types: Optional[List[shared.AlarmTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'AlarmTypes', 'style': 'form', 'explode': True }})
    children_of_alarm_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ChildrenOfAlarmName', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    parents_of_alarm_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ParentsOfAlarmName', 'style': 'form', 'explode': True }})
    state_value: Optional[GetDescribeAlarmsStateValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'StateValue', 'style': 'form', 'explode': True }})
    version: GetDescribeAlarmsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeAlarmsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeAlarmsRequest:
    query_params: GetDescribeAlarmsQueryParams = field(default=None)
    headers: GetDescribeAlarmsHeaders = field(default=None)
    

@dataclass
class GetDescribeAlarmsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
