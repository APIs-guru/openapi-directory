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
class UpdateOpsMetadataRequest:
    ops_metadata_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsMetadataArn') }})
    keys_to_delete: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeysToDelete') }})
    metadata_to_update: Optional[dict[str, MetadataValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataToUpdate') }})
    
