from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactmethod


@dataclass_json
@dataclass
class GetContactMethodsResult:
    contact_methods: Optional[List[contactmethod.ContactMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactMethods' }})
    
