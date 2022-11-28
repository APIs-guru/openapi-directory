from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoredResourceInfo:
    r"""MonitoredResourceInfo
    <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms\">Alarms in Amazon Lightsail</a>.</p>
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
