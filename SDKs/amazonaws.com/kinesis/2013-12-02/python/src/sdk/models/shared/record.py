from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptiontype_enum


@dataclass_json
@dataclass
class Record:
    approximate_arrival_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApproximateArrivalTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    encryption_type: Optional[encryptiontype_enum.EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionType' }})
    partition_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionKey' }})
    sequence_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumber' }})
    
