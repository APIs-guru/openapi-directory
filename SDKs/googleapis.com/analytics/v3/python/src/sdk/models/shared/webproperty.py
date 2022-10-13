from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebpropertyChildLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class WebpropertyParentLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class WebpropertyPermissions:
    effective: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective' }})
    

@dataclass_json
@dataclass
class Webproperty:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    child_link: Optional[WebpropertyChildLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childLink' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_retention_reset_on_new_activity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRetentionResetOnNewActivity' }})
    data_retention_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRetentionTtl' }})
    default_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultProfileId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    industry_vertical: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'industryVertical' }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalWebPropertyId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_link: Optional[WebpropertyParentLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLink' }})
    permissions: Optional[WebpropertyPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    profile_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileCount' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    
