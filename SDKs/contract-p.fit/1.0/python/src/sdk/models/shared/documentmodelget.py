from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import statemodelget
from . import statemodelget
from . import statemodelget
from . import statusdatamodel
from . import statemodelget
from . import timingsmodelget


@dataclass_json
@dataclass
class DocumentModelGet:
    escalate: Optional[statemodelget.StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'escalate' }})
    feedback: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    files: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    flag_for_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag_for_review' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inbox: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbox' }})
    last_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_version' }})
    lock: Optional[statemodelget.StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lock' }})
    meta_information: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_information' }})
    original_filename: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_filename' }})
    page_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_count' }})
    prediction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prediction' }})
    reject: Optional[statemodelget.StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reject' }})
    status_data: Optional[statusdatamodel.StatusDataModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_data' }})
    submitted: Optional[statemodelget.StateModelGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitted' }})
    timings: Optional[timingsmodelget.TimingsModelGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timings' }})
    usage_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_data' }})
    versions: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
