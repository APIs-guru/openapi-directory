from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reportcontext
from . import reportfrequency
from . import tag
from . import reporttype_enum


@dataclass_json
@dataclass
class CreateLicenseManagerReportGeneratorRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    report_context: reportcontext.ReportContext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportContext' }})
    report_frequency: reportfrequency.ReportFrequency = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportFrequency' }})
    report_generator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportGeneratorName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: List[reporttype_enum.ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
