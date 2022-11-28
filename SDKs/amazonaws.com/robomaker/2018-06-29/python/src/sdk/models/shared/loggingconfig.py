from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoggingConfig:
    r"""LoggingConfig
    The logging configuration.
    """
    
    record_all_ros_topics: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordAllRosTopics') }})
    
