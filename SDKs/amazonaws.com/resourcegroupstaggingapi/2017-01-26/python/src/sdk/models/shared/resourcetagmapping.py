from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compliancedetails
from . import tag


@dataclass_json
@dataclass
class ResourceTagMapping:
    compliance_details: Optional[compliancedetails.ComplianceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceDetails' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
