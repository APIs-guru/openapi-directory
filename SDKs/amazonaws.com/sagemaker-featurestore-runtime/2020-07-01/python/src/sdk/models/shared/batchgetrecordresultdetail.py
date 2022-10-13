from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import featurevalue


@dataclass_json
@dataclass
class BatchGetRecordResultDetail:
    feature_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupName' }})
    record: List[featurevalue.FeatureValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Record' }})
    record_identifier_value_as_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordIdentifierValueAsString' }})
    
