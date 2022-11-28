from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Value:
    r"""Value
    <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
    """
    
    array_values: Optional[List[Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayValues') }})
    big_int_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigIntValue') }})
    bit_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitValue') }})
    blob_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    int_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    is_null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNull') }})
    real_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    struct_value: Optional[StructValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structValue') }})
    
