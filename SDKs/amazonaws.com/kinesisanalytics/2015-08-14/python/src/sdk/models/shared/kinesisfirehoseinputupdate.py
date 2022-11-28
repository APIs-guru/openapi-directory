from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisFirehoseInputUpdate:
    r"""KinesisFirehoseInputUpdate
    When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
    """
    
    resource_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNUpdate') }})
    role_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARNUpdate') }})
    
