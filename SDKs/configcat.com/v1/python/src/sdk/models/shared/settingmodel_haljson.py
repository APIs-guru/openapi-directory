from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import settingtype_enum


@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization:
    links: Optional[SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded:
    organization: Optional[SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks:
    configs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    environments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    permission_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission-groups' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTagsEmbeddedProduct:
    embedded: Optional[SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTagsEmbedded:
    product: Optional[SettingModelHaljsonEmbeddedTagsEmbeddedProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTagsLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbeddedTags:
    embedded: Optional[SettingModelHaljsonEmbeddedTagsEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingModelHaljsonEmbeddedTagsLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tag_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagId' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonEmbedded:
    tags: Optional[List[SettingModelHaljsonEmbeddedTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class SettingModelHaljsonLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class SettingModelHaljson:
    embedded: Optional[SettingModelHaljsonEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingModelHaljsonLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configName' }})
    expiration_warning_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationWarningAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hint' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerUserEmail' }})
    owner_user_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerUserFullName' }})
    setting_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingId' }})
    setting_type: Optional[settingtype_enum.SettingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingType' }})
    
