from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SimilarCompany:
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    employee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'industry' }})
    linkedin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedin' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    twitter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twitter' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
