from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BigQueryDatasetSource:
    r"""BigQueryDatasetSource
    A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset.
    """
    
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    
