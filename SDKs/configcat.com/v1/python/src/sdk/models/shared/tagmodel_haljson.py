from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

@dataclass_json
@dataclass
class TagModelHaljsonEmbeddedProductEmbeddedOrganization:
    links: Optional[TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    

@dataclass_json
@dataclass
class TagModelHaljsonEmbeddedProductEmbedded:
    organization: Optional[TagModelHaljsonEmbeddedProductEmbeddedOrganization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    

@dataclass_json
@dataclass
class TagModelHaljsonEmbeddedProductLinks:
    configs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    environments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    permission_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission-groups') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclass
class TagModelHaljsonEmbeddedProduct:
    embedded: Optional[TagModelHaljsonEmbeddedProductEmbedded] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[TagModelHaljsonEmbeddedProductLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    

@dataclass_json
@dataclass
class TagModelHaljsonEmbedded:
    product: Optional[TagModelHaljsonEmbeddedProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    

@dataclass_json
@dataclass
class TagModelHaljsonLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class TagModelHaljson:
    embedded: Optional[TagModelHaljsonEmbedded] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[TagModelHaljsonLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tag_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagId') }})
    
