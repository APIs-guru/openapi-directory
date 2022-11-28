from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetRecordResultDetail:
    r"""BatchGetRecordResultDetail
    The output of Records that have been retrieved in a batch.
    """
    
    feature_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    record: List[FeatureValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Record') }})
    record_identifier_value_as_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifierValueAsString') }})
    
