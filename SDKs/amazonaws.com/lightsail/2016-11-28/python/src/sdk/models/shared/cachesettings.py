from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CacheSettings:
    r"""CacheSettings
    <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
    """
    
    allowed_http_methods: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedHTTPMethods') }})
    cached_http_methods: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachedHTTPMethods') }})
    default_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTTL') }})
    forwarded_cookies: Optional[CookieObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardedCookies') }})
    forwarded_headers: Optional[HeaderObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardedHeaders') }})
    forwarded_query_strings: Optional[QueryStringObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardedQueryStrings') }})
    maximum_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumTTL') }})
    minimum_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumTTL') }})
    
