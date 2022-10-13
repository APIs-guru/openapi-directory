from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import publishmetricaction


@dataclass_json
@dataclass
class ActionDefinition:
    publish_metric_action: Optional[publishmetricaction.PublishMetricAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublishMetricAction' }})
    
