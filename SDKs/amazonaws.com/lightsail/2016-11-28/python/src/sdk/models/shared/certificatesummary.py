from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificate
from . import tag


@dataclass_json
@dataclass
class CertificateSummary:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_detail: Optional[certificate.Certificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateDetail' }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
