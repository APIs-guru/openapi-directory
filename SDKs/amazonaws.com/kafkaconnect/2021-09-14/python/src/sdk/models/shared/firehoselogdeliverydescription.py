from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirehoseLogDeliveryDescription:
    r"""FirehoseLogDeliveryDescription
    A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
    """
    
    delivery_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryStream') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
