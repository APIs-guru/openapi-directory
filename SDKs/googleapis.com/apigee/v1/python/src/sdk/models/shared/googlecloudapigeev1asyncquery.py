from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1querymetadata
from . import googlecloudapigeev1asyncqueryresult


@dataclass_json
@dataclass
class GoogleCloudApigeeV1AsyncQuery:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    envgroup_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envgroupHostname' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    execution_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    query_params: Optional[googlecloudapigeev1querymetadata.GoogleCloudApigeeV1QueryMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    report_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDefinitionId' }})
    result: Optional[googlecloudapigeev1asyncqueryresult.GoogleCloudApigeeV1AsyncQueryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    result_file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultFileSize' }})
    result_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultRows' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
