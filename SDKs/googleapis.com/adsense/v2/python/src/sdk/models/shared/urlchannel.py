from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class URLChannel:
    r"""URLChannel
    Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reporting_dimension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingDimensionId') }})
    uri_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriPattern') }})
    
