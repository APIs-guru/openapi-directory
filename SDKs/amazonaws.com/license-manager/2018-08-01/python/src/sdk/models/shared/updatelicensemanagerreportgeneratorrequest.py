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
class UpdateLicenseManagerReportGeneratorRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    license_manager_report_generator_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseManagerReportGeneratorArn') }})
    report_context: ReportContext = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportContext') }})
    report_frequency: ReportFrequency = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportFrequency') }})
    report_generator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportGeneratorName') }})
    type: List[ReportTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
