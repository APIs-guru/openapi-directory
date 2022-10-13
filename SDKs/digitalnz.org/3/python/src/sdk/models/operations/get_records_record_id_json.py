from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetRecordsRecordIDJSONPathParams:
    record_id: int = field(default=None, metadata={'path_param': { 'field_name': 'record_id', 'style': 'simple', 'explode': False }})
    
class GetRecordsRecordIDJSONFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetRecordsRecordIDJSONQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    format: GetRecordsRecordIDJSONFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecordsRecordIDJSONRequest:
    path_params: GetRecordsRecordIDJSONPathParams = field(default=None)
    query_params: GetRecordsRecordIDJSONQueryParams = field(default=None)
    

@dataclass
class GetRecordsRecordIDJSONResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_records_record_id_json_403_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_records_record_id_json_404_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    record: Optional[shared.Record] = field(default=None)
    
