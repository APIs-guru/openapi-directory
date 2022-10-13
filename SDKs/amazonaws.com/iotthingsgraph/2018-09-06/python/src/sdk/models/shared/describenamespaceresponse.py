from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeNamespaceResponse:
    namespace_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceArn' }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceName' }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceVersion' }})
    tracking_namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNamespaceName' }})
    tracking_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNamespaceVersion' }})
    
