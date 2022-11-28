from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisStreamsInputDescription:
    r"""KinesisStreamsInputDescription
    For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. 
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    
