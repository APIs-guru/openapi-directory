from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reportcontext
from . import reportfrequency
from . import reporttype_enum
from . import s3location
from . import tag


@dataclass_json
@dataclass
class ReportGenerator:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_report_generation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastReportGenerationTime' }})
    last_run_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRunFailureReason' }})
    last_run_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRunStatus' }})
    license_manager_report_generator_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseManagerReportGeneratorArn' }})
    report_context: Optional[reportcontext.ReportContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportContext' }})
    report_creator_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportCreatorAccount' }})
    report_frequency: Optional[reportfrequency.ReportFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportFrequency' }})
    report_generator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportGeneratorName' }})
    report_type: Optional[List[reporttype_enum.ReportTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportType' }})
    s3_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Location' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
