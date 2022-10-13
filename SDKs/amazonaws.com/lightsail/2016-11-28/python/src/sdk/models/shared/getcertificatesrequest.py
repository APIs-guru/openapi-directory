from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificatestatus_enum


@dataclass_json
@dataclass
class GetCertificatesRequest:
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    certificate_statuses: Optional[List[certificatestatus_enum.CertificateStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateStatuses' }})
    include_certificate_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeCertificateDetails' }})
    
