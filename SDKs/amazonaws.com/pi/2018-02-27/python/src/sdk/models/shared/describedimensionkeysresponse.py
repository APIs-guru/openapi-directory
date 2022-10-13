from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionkeydescription
from . import responsepartitionkey


@dataclass_json
@dataclass
class DescribeDimensionKeysResponse:
    aligned_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlignedEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    aligned_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlignedStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    keys: Optional[List[dimensionkeydescription.DimensionKeyDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    partition_keys: Optional[List[responsepartitionkey.ResponsePartitionKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionKeys' }})
    
