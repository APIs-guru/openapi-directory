from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import integrationlinktype_enum
from . import settingtype_enum
from . import rolloutpercentageitemmodel
from . import rolloutrulemodel


@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization:
    links: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded:
    organization: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks:
    configs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    environments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    permission_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission-groups' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct:
    embedded: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfigEmbedded:
    product: Optional[SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfigLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedConfig:
    embedded: Optional[SettingValueModelHaljsonEmbeddedConfigEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingValueModelHaljsonEmbeddedConfigLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization:
    links: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded:
    organization: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks:
    configs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    environments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    permission_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission-groups' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct:
    embedded: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentEmbedded:
    product: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironmentLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedEnvironment:
    embedded: Optional[SettingValueModelHaljsonEmbeddedEnvironmentEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingValueModelHaljsonEmbeddedEnvironmentLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedIntegrationLinks:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    integration_link_type: Optional[integrationlinktype_enum.IntegrationLinkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationLinkType' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedSetting:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorEmail' }})
    creator_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorFullName' }})
    expiration_warning_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationWarningAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hint' }})
    is_watching: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isWatching' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerEmail' }})
    owner_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerFullName' }})
    setting_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingId' }})
    setting_type: Optional[settingtype_enum.SettingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingType' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbeddedSettingTags:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    setting_tag_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingTagId' }})
    tag_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagId' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonEmbedded:
    config: Optional[SettingValueModelHaljsonEmbeddedConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    environment: Optional[SettingValueModelHaljsonEmbeddedEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    integration_links: Optional[List[SettingValueModelHaljsonEmbeddedIntegrationLinks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationLinks' }})
    setting: Optional[SettingValueModelHaljsonEmbeddedSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setting' }})
    setting_tags: Optional[List[SettingValueModelHaljsonEmbeddedSettingTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingTags' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljsonLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class SettingValueModelHaljson:
    embedded: Optional[SettingValueModelHaljsonEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[SettingValueModelHaljsonLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    last_updater_user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdaterUserEmail' }})
    last_updater_user_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdaterUserFullName' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    rollout_percentage_items: Optional[List[rolloutpercentageitemmodel.RolloutPercentageItemModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutPercentageItems' }})
    rollout_rules: Optional[List[rolloutrulemodel.RolloutRuleModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutRules' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
