from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ApplicationDatabaseTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    CLOUD_DATASTORE = "CLOUD_DATASTORE"
    CLOUD_FIRESTORE = "CLOUD_FIRESTORE"
    CLOUD_DATASTORE_COMPATIBILITY = "CLOUD_DATASTORE_COMPATIBILITY"

class ApplicationServingStatusEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SERVING = "SERVING"
    USER_DISABLED = "USER_DISABLED"
    SYSTEM_DISABLED = "SYSTEM_DISABLED"


@dataclass_json
@dataclass
class Application:
    r"""Application
    An Application resource contains the top-level configuration of an App Engine application.
    """
    
    auth_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authDomain') }})
    code_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeBucket') }})
    database_type: Optional[ApplicationDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    default_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultBucket') }})
    default_cookie_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCookieExpiration') }})
    default_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHostname') }})
    dispatch_rules: Optional[List[URLDispatchRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchRules') }})
    feature_settings: Optional[FeatureSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureSettings') }})
    gcr_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcrDomain') }})
    iap: Optional[IdentityAwareProxy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iap') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    serving_status: Optional[ApplicationServingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingStatus') }})
    

@dataclass_json
@dataclass
class ApplicationInput:
    r"""ApplicationInput
    An Application resource contains the top-level configuration of an App Engine application.
    """
    
    auth_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authDomain') }})
    database_type: Optional[ApplicationDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    default_cookie_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCookieExpiration') }})
    dispatch_rules: Optional[List[URLDispatchRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchRules') }})
    feature_settings: Optional[FeatureSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureSettings') }})
    iap: Optional[IdentityAwareProxyInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iap') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    serving_status: Optional[ApplicationServingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingStatus') }})
    
