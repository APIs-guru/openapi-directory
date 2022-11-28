from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDataSourceFromS3Output:
    r"""CreateDataSourceFromS3Output
    <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
    """
    
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    
