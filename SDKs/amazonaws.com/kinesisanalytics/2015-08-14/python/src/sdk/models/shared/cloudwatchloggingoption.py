from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudWatchLoggingOption:
    r"""CloudWatchLoggingOption
    Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
    """
    
    log_stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogStreamARN') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    
