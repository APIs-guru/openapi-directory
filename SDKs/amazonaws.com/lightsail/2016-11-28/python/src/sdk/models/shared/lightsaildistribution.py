from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cachesettings
from . import cachebehaviorperpath
from . import cachebehavior
from . import ipaddresstype_enum
from . import resourcelocation
from . import origin
from . import resourcetype_enum
from . import tag


@dataclass_json
@dataclass
class LightsailDistribution:
    able_to_update_bundle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ableToUpdateBundle' }})
    alternative_domain_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternativeDomainNames' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    cache_behavior_settings: Optional[cachesettings.CacheSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheBehaviorSettings' }})
    cache_behaviors: Optional[List[cachebehaviorperpath.CacheBehaviorPerPath]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheBehaviors' }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_cache_behavior: Optional[cachebehavior.CacheBehavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCacheBehavior' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origin: Optional[origin.Origin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    origin_public_dns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originPublicDNS' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
