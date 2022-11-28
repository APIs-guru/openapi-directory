from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessRules:
    r"""AccessRules
    <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions\">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p>
    """
    
    allow_public_overrides: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPublicOverrides') }})
    get_object: Optional[AccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getObject') }})
    
