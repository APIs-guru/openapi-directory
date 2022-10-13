from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import code_scanning_analysis_tool


@dataclass_json
@dataclass
class CodeScanningAnalysis:
    analysis_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysis_key' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    commit_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_sha' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletable' }})
    environment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    error: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    results_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results_count' }})
    rules_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules_count' }})
    sarif_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sarif_id' }})
    tool: code_scanning_analysis_tool.CodeScanningAnalysisTool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tool' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    warning: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warning' }})
    
