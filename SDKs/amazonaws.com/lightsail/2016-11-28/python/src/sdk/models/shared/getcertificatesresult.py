from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificatesummary


@dataclass_json
@dataclass
class GetCertificatesResult:
    certificates: Optional[List[certificatesummary.CertificateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    
