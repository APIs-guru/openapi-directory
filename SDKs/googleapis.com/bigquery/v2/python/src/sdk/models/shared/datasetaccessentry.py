from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datasetreference

class DatasetAccessEntryTargetTypesEnum(str, Enum):
    TARGET_TYPE_UNSPECIFIED = "TARGET_TYPE_UNSPECIFIED"
    VIEWS = "VIEWS"


@dataclass_json
@dataclass
class DatasetAccessEntry:
    dataset: Optional[datasetreference.DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset' }})
    target_types: Optional[List[DatasetAccessEntryTargetTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetTypes' }})
    
