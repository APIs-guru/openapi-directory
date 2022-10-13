from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateCertificateRequest:
    certificate_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
