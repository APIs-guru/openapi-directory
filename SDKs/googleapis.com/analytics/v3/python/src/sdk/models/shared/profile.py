from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfileChildLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ProfileParentLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ProfilePermissions:
    effective: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective' }})
    

@dataclass_json
@dataclass
class Profile:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    bot_filtering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botFilteringEnabled' }})
    child_link: Optional[ProfileChildLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childLink' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    default_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPage' }})
    e_commerce_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eCommerceTracking' }})
    enhanced_e_commerce_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enhancedECommerceTracking' }})
    exclude_query_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeQueryParameters' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalWebPropertyId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_link: Optional[ProfileParentLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLink' }})
    permissions: Optional[ProfilePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    site_search_category_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearchCategoryParameters' }})
    site_search_query_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearchQueryParameters' }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred' }})
    strip_site_search_category_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripSiteSearchCategoryParameters' }})
    strip_site_search_query_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripSiteSearchQueryParameters' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    
