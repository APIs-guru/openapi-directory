from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetRecordIdentifier:
    r"""BatchGetRecordIdentifier
    The identifier that identifies the batch of Records you are retrieving in a batch.
    """
    
    feature_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    record_identifiers_value_as_string: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifiersValueAsString') }})
    feature_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureNames') }})
    
