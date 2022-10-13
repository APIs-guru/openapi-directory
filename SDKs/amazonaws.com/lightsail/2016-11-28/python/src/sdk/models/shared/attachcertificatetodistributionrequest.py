from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachCertificateToDistributionRequest:
    certificate_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    distribution_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionName' }})
    
