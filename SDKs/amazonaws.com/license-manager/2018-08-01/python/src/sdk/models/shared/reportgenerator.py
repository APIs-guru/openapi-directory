from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportGenerator:
    r"""ReportGenerator
    Describe the details of a report generator.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    last_report_generation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastReportGenerationTime') }})
    last_run_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRunFailureReason') }})
    last_run_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRunStatus') }})
    license_manager_report_generator_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseManagerReportGeneratorArn') }})
    report_context: Optional[ReportContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportContext') }})
    report_creator_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportCreatorAccount') }})
    report_frequency: Optional[ReportFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportFrequency') }})
    report_generator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportGeneratorName') }})
    report_type: Optional[List[ReportTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportType') }})
    s3_location: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Location') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
