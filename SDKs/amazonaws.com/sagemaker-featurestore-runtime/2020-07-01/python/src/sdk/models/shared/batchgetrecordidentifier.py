from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchGetRecordIdentifier:
    feature_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupName' }})
    feature_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureNames' }})
    record_identifiers_value_as_string: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordIdentifiersValueAsString' }})
    
