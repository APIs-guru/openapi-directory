from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddAssociationRequest:
    destination_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationArn') }})
    source_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceArn') }})
    association_type: Optional[AssociationEdgeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationType') }})
    
