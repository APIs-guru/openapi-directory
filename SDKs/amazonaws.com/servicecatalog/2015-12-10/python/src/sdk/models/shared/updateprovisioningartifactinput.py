from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateProvisioningArtifactInput:
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioning_artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    guidance: Optional[ProvisioningArtifactGuidanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Guidance') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
