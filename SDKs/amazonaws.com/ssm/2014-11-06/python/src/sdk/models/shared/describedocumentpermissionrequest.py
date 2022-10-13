from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import documentpermissiontype_enum


@dataclass_json
@dataclass
class DescribeDocumentPermissionRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    permission_type: documentpermissiontype_enum.DocumentPermissionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionType' }})
    
