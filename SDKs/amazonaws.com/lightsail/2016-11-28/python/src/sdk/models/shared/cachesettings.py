from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cookieobject
from . import headerobject
from . import querystringobject


@dataclass_json
@dataclass
class CacheSettings:
    allowed_http_methods: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedHTTPMethods' }})
    cached_http_methods: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachedHTTPMethods' }})
    default_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTTL' }})
    forwarded_cookies: Optional[cookieobject.CookieObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardedCookies' }})
    forwarded_headers: Optional[headerobject.HeaderObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardedHeaders' }})
    forwarded_query_strings: Optional[querystringobject.QueryStringObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardedQueryStrings' }})
    maximum_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumTTL' }})
    minimum_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumTTL' }})
    
