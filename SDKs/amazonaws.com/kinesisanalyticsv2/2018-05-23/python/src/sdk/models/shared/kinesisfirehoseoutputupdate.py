from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisFirehoseOutputUpdate:
    r"""KinesisFirehoseOutputUpdate
    For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.
    """
    
    resource_arn_update: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNUpdate') }})
    
