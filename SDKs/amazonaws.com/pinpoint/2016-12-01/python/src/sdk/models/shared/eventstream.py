from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventStream:
    r"""EventStream
    Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    destination_stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationStreamArn') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedBy') }})
    
