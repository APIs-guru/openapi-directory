from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TopicFilter:
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicName' }})
    use_default_if_preference_unavailable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseDefaultIfPreferenceUnavailable' }})
    
