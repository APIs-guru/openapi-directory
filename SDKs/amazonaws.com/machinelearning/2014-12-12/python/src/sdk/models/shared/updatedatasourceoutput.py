from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateDataSourceOutput:
    r"""UpdateDataSourceOutput
    <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
    """
    
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    
