from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetDescribeAlarmHistoryActionEnum(str, Enum):
    DESCRIBE_ALARM_HISTORY = "DescribeAlarmHistory"

class GetDescribeAlarmHistoryHistoryItemTypeEnum(str, Enum):
    CONFIGURATION_UPDATE = "ConfigurationUpdate"
    STATE_UPDATE = "StateUpdate"
    ACTION = "Action"

class GetDescribeAlarmHistoryScanByEnum(str, Enum):
    TIMESTAMP_DESCENDING = "TimestampDescending"
    TIMESTAMP_ASCENDING = "TimestampAscending"

class GetDescribeAlarmHistoryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclass
class GetDescribeAlarmHistoryQueryParams:
    action: GetDescribeAlarmHistoryActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeAlarmHistoryVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    alarm_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AlarmName', 'style': 'form', 'explode': True }})
    alarm_types: Optional[List[shared.AlarmTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'AlarmTypes', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    history_item_type: Optional[GetDescribeAlarmHistoryHistoryItemTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'HistoryItemType', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    scan_by: Optional[GetDescribeAlarmHistoryScanByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ScanBy', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeAlarmHistoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeAlarmHistoryRequest:
    headers: GetDescribeAlarmHistoryHeaders = field()
    query_params: GetDescribeAlarmHistoryQueryParams = field()
    

@dataclass
class GetDescribeAlarmHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
