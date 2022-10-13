from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reportcontext
from . import reportfrequency
from . import reporttype_enum


@dataclass_json
@dataclass
class UpdateLicenseManagerReportGeneratorRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    license_manager_report_generator_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseManagerReportGeneratorArn' }})
    report_context: reportcontext.ReportContext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportContext' }})
    report_frequency: reportfrequency.ReportFrequency = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportFrequency' }})
    report_generator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportGeneratorName' }})
    type: List[reporttype_enum.ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
