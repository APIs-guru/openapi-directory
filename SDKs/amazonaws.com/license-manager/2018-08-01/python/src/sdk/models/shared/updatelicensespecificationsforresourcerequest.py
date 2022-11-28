from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateLicenseSpecificationsForResourceRequest:
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    add_license_specifications: Optional[List[LicenseSpecification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddLicenseSpecifications') }})
    remove_license_specifications: Optional[List[LicenseSpecification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveLicenseSpecifications') }})
    
