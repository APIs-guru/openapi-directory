from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1securityreportmetadata
from . import googlecloudapigeev1securityreportresultmetadata


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityReport:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    envgroup_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envgroupHostname' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    execution_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTime' }})
    query_params: Optional[googlecloudapigeev1securityreportmetadata.GoogleCloudApigeeV1SecurityReportMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    report_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDefinitionId' }})
    result: Optional[googlecloudapigeev1securityreportresultmetadata.GoogleCloudApigeeV1SecurityReportResultMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    result_file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultFileSize' }})
    result_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultRows' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
