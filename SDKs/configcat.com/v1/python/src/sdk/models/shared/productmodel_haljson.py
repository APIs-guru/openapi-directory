from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductModelHaljsonEmbeddedOrganizationLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

@dataclass_json
@dataclass
class ProductModelHaljsonEmbeddedOrganization:
    links: Optional[ProductModelHaljsonEmbeddedOrganizationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    

@dataclass_json
@dataclass
class ProductModelHaljsonEmbedded:
    organization: Optional[ProductModelHaljsonEmbeddedOrganization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

@dataclass_json
@dataclass
class ProductModelHaljsonLinks:
    configs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    environments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    permission_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission-groups' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class ProductModelHaljson:
    embedded: Optional[ProductModelHaljsonEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[ProductModelHaljsonLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
