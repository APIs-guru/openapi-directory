from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import exportjobsresponse


@dataclass_json
@dataclass
class GetSegmentExportJobsResponse:
    export_jobs_response: exportjobsresponse.ExportJobsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportJobsResponse' }})
    
