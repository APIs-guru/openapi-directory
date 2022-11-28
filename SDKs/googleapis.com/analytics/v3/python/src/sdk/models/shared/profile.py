from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProfileChildLink:
    r"""ProfileChildLink
    Child link for this view (profile). Points to the list of goals for this view (profile).
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ProfileParentLink:
    r"""ProfileParentLink
    Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ProfilePermissions:
    r"""ProfilePermissions
    Permissions the user has for this view (profile).
    """
    
    effective: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective') }})
    

@dataclass_json
@dataclass
class ProfileInput:
    r"""ProfileInput
    JSON template for an Analytics view (profile).
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    bot_filtering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botFilteringEnabled') }})
    child_link: Optional[ProfileChildLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childLink') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    default_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPage') }})
    e_commerce_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eCommerceTracking') }})
    enhanced_e_commerce_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedECommerceTracking') }})
    exclude_query_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeQueryParameters') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_link: Optional[ProfileParentLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLink') }})
    site_search_category_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearchCategoryParameters') }})
    site_search_query_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearchQueryParameters') }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred') }})
    strip_site_search_category_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripSiteSearchCategoryParameters') }})
    strip_site_search_query_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripSiteSearchQueryParameters') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    

@dataclass_json
@dataclass
class Profile:
    r"""Profile
    JSON template for an Analytics view (profile).
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    bot_filtering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botFilteringEnabled') }})
    child_link: Optional[ProfileChildLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childLink') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    default_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPage') }})
    e_commerce_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eCommerceTracking') }})
    enhanced_e_commerce_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedECommerceTracking') }})
    exclude_query_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeQueryParameters') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalWebPropertyId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_link: Optional[ProfileParentLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLink') }})
    permissions: Optional[ProfilePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    site_search_category_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearchCategoryParameters') }})
    site_search_query_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearchQueryParameters') }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred') }})
    strip_site_search_category_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripSiteSearchCategoryParameters') }})
    strip_site_search_query_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripSiteSearchQueryParameters') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    
