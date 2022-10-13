from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificatesummary
from . import operation


@dataclass_json
@dataclass
class CreateCertificateResult:
    certificate: Optional[certificatesummary.CertificateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    operations: Optional[List[operation.Operation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    
