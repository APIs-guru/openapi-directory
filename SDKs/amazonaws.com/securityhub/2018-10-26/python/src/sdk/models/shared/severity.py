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
class Severity:
    r"""Severity
    <p>The severity of the finding.</p> <p>The finding provider can provide the initial severity. The finding provider can only update the severity if it has not been updated using <code>BatchUpdateFindings</code>.</p> <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If only one of these attributes is populated, then Security Hub automatically populates the other one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is the preferred attribute.</p>
    """
    
    label: Optional[SeverityLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    normalized: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Normalized') }})
    original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Original') }})
    product: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Product') }})
    
