from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryStringObject:
    r"""QueryStringObject
    <p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p>
    """
    
    option: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    query_strings_allow_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryStringsAllowList') }})
    
