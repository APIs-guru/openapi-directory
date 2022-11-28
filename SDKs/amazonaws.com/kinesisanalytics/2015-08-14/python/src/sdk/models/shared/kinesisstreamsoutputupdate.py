from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisStreamsOutputUpdate:
    r"""KinesisStreamsOutputUpdate
     When updating an output configuration using the <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html\">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. 
    """
    
    resource_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNUpdate') }})
    role_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARNUpdate') }})
    
