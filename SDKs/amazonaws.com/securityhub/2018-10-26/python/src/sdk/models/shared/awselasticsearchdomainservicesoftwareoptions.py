from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElasticsearchDomainServiceSoftwareOptions:
    r"""AwsElasticsearchDomainServiceSoftwareOptions
    Information about the state of the domain relative to the latest service software.
    """
    
    automated_update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomatedUpdateDate') }})
    cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cancellable') }})
    current_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    new_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewVersion') }})
    update_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateAvailable') }})
    update_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateStatus') }})
    
