from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HeaderObject:
    r"""HeaderObject
    <p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p>
    """
    
    headers_allow_list: Optional[List[HeaderEnumEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headersAllowList') }})
    option: Optional[ForwardValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    
