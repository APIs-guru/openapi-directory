from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTabularStatsResponse:
    r"""GoogleCloudApigeeV1QueryTabularStatsResponse
    Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.
    """
    
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    values: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
