from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteLicenseManagerReportGeneratorRequest:
    license_manager_report_generator_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseManagerReportGeneratorArn' }})
    
