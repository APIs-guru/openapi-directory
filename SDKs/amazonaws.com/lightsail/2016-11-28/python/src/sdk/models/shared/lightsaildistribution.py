from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LightsailDistribution:
    r"""LightsailDistribution
    Describes an Amazon Lightsail content delivery network (CDN) distribution.
    """
    
    able_to_update_bundle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ableToUpdateBundle') }})
    alternative_domain_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeDomainNames') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    cache_behavior_settings: Optional[CacheSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviorSettings') }})
    cache_behaviors: Optional[List[CacheBehaviorPerPath]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviors') }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_cache_behavior: Optional[CacheBehavior] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCacheBehavior') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    location: Optional[ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin: Optional[Origin] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    origin_public_dns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originPublicDNS') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportCode') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
