from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLStatementResult:
    r"""SQLStatementResult
    <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
    """
    
    number_of_records_updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfRecordsUpdated') }})
    result_frame: Optional[ResultFrame] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultFrame') }})
    
