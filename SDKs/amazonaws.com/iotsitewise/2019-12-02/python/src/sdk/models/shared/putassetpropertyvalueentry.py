from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAssetPropertyValueEntry:
    r"""PutAssetPropertyValueEntry
    Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html\">BatchPutAssetPropertyValue</a> API operation.
    """
    
    entry_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryId') }})
    property_values: List[AssetPropertyValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValues') }})
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    property_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyAlias') }})
    property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    
