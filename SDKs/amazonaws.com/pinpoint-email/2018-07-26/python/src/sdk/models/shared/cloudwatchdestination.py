from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import cloudwatchdimensionconfiguration


@dataclass_json
@dataclass
class CloudWatchDestination:
    dimension_configurations: List[cloudwatchdimensionconfiguration.CloudWatchDimensionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionConfigurations' }})
    
