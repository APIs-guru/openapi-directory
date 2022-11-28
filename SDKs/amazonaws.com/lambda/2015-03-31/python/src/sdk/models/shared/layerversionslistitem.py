from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LayerVersionsListItem:
    r"""LayerVersionsListItem
    Details about a version of an <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html\">Lambda layer</a>.
    """
    
    compatible_runtimes: Optional[List[RuntimeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompatibleRuntimes') }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    layer_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerVersionArn') }})
    license_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseInfo') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
