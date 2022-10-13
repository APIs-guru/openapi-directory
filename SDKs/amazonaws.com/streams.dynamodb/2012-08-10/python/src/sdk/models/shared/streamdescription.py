from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import keyschemaelement
from . import shard
from . import streamstatus_enum
from . import streamviewtype_enum


@dataclass_json
@dataclass
class StreamDescription:
    creation_request_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationRequestDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_schema: Optional[List[keyschemaelement.KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    last_evaluated_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedShardId' }})
    shards: Optional[List[shard.Shard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shards' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamArn' }})
    stream_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamLabel' }})
    stream_status: Optional[streamstatus_enum.StreamStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamStatus' }})
    stream_view_type: Optional[streamviewtype_enum.StreamViewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamViewType' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
