from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import block
from . import documentmetadata
from . import jobstatus_enum
from . import warning


@dataclass_json
@dataclass
class GetDocumentAnalysisResponse:
    analyze_document_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyzeDocumentModelVersion' }})
    blocks: Optional[List[block.Block]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Blocks' }})
    document_metadata: Optional[documentmetadata.DocumentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentMetadata' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    warnings: Optional[List[warning.Warning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warnings' }})
    
