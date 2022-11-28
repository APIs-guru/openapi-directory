from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRecordsRecordIDJSONPathParams:
    record_id: int = field(metadata={'path_param': { 'field_name': 'record_id', 'style': 'simple', 'explode': False }})
    
class GetRecordsRecordIDJSONFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetRecordsRecordIDJSONQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    format: GetRecordsRecordIDJSONFormatEnum = field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetRecordsRecordIDJSONRequest:
    path_params: GetRecordsRecordIDJSONPathParams = field()
    query_params: GetRecordsRecordIDJSONQueryParams = field()
    

@dataclass
class GetRecordsRecordIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_records_record_id_json_403_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_records_record_id_json_404_application_json_object: Optional[dict[str, Any]] = field(default=None)
    record: Optional[shared.Record] = field(default=None)
    
