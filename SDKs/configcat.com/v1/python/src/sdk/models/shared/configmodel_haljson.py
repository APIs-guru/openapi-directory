from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

@dataclass_json
@dataclass
class ConfigModelHaljsonEmbeddedProductEmbeddedOrganization:
    links: Optional[ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    

@dataclass_json
@dataclass
class ConfigModelHaljsonEmbeddedProductEmbedded:
    organization: Optional[ConfigModelHaljsonEmbeddedProductEmbeddedOrganization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

@dataclass_json
@dataclass
class ConfigModelHaljsonEmbeddedProductLinks:
    configs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    environments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    permission_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission-groups' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class ConfigModelHaljsonEmbeddedProduct:
    embedded: Optional[ConfigModelHaljsonEmbeddedProductEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[ConfigModelHaljsonEmbeddedProductLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    

@dataclass_json
@dataclass
class ConfigModelHaljsonEmbedded:
    product: Optional[ConfigModelHaljsonEmbeddedProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    

@dataclass_json
@dataclass
class ConfigModelHaljsonLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class ConfigModelHaljson:
    embedded: Optional[ConfigModelHaljsonEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[ConfigModelHaljsonLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
