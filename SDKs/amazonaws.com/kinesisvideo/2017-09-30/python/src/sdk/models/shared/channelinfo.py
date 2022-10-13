from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum
from . import channeltype_enum
from . import singlemasterconfiguration


@dataclass_json
@dataclass
class ChannelInfo:
    channel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelARN' }})
    channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelName' }})
    channel_status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelStatus' }})
    channel_type: Optional[channeltype_enum.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    single_master_configuration: Optional[singlemasterconfiguration.SingleMasterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleMasterConfiguration' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
