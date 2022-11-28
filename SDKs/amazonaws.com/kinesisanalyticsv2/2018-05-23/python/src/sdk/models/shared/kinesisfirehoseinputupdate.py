from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisFirehoseInputUpdate:
    r"""KinesisFirehoseInputUpdate
    For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.
    """
    
    resource_arn_update: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNUpdate') }})
    
