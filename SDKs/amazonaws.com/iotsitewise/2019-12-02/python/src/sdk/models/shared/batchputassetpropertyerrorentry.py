from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchPutAssetPropertyErrorEntry:
    r"""BatchPutAssetPropertyErrorEntry
    Contains error information for asset property value entries that are associated with the <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html\">BatchPutAssetPropertyValue</a> API.
    """
    
    entry_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryId') }})
    errors: List[BatchPutAssetPropertyError] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
