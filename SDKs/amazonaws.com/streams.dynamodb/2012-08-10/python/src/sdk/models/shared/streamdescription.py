from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamDescription:
    r"""StreamDescription
    Represents all of the data describing a particular stream.
    """
    
    creation_request_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationRequestDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_schema: Optional[List[KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    last_evaluated_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedShardId') }})
    shards: Optional[List[Shard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shards') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamArn') }})
    stream_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamLabel') }})
    stream_status: Optional[StreamStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamStatus') }})
    stream_view_type: Optional[StreamViewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamViewType') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
