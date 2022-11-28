from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserDefinedFunctionResource:
    r"""UserDefinedFunctionResource
    This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of Standard SQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions
    """
    
    inline_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineCode') }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    
