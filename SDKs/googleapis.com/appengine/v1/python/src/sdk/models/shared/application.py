from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import urldispatchrule
from . import featuresettings
from . import identityawareproxy

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
    auth_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authDomain' }})
    code_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeBucket' }})
    database_type: Optional[ApplicationDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseType' }})
    default_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultBucket' }})
    default_cookie_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCookieExpiration' }})
    default_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHostname' }})
    dispatch_rules: Optional[List[urldispatchrule.URLDispatchRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchRules' }})
    feature_settings: Optional[featuresettings.FeatureSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureSettings' }})
    gcr_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcrDomain' }})
    iap: Optional[identityawareproxy.IdentityAwareProxy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iap' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    serving_status: Optional[ApplicationServingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingStatus' }})
    
