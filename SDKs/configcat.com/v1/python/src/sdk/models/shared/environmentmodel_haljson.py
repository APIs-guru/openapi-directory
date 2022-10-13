from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

@dataclass_json
@dataclass
class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization:
    links: Optional[EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    

@dataclass_json
@dataclass
class EnvironmentModelHaljsonEmbeddedProductEmbedded:
    organization: Optional[EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

@dataclass_json
@dataclass
class EnvironmentModelHaljsonEmbeddedProductLinks:
    configs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    environments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    permission_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission-groups' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class EnvironmentModelHaljsonEmbeddedProduct:
    embedded: Optional[EnvironmentModelHaljsonEmbeddedProductEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[EnvironmentModelHaljsonEmbeddedProductLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    

@dataclass_json
@dataclass
class EnvironmentModelHaljsonEmbedded:
    product: Optional[EnvironmentModelHaljsonEmbeddedProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    

@dataclass_json
@dataclass
class EnvironmentModelHaljsonLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class EnvironmentModelHaljson:
    embedded: Optional[EnvironmentModelHaljsonEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[EnvironmentModelHaljsonLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
