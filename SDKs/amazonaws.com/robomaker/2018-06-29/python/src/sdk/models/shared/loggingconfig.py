from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoggingConfig:
    record_all_ros_topics: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordAllRosTopics' }})
    
