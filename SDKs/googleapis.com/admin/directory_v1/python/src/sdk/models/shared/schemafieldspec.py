from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SchemaFieldSpecNumericIndexingSpec:
    r"""SchemaFieldSpecNumericIndexingSpec
    Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
    """
    
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    

@dataclass_json
@dataclass
class SchemaFieldSpec:
    r"""SchemaFieldSpec
    You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    field_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldType') }})
    indexed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexed') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    multi_valued: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiValued') }})
    numeric_indexing_spec: Optional[SchemaFieldSpecNumericIndexingSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericIndexingSpec') }})
    read_access_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAccessType') }})
    
