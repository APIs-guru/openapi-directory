from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElasticsearchDomainServiceSoftwareOptions:
    automated_update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomatedUpdateDate' }})
    cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cancellable' }})
    current_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    new_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewVersion' }})
    update_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateAvailable' }})
    update_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateStatus' }})
    
