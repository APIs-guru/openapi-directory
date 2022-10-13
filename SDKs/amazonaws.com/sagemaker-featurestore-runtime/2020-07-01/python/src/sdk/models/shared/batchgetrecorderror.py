from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchGetRecordError:
    error_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    feature_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupName' }})
    record_identifier_value_as_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordIdentifierValueAsString' }})
    
