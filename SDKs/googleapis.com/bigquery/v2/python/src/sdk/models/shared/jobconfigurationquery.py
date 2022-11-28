from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobConfigurationQuery:
    allow_large_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowLargeResults') }})
    clustering: Optional[Clustering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clustering') }})
    connection_properties: Optional[List[ConnectionProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionProperties') }})
    create_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDisposition') }})
    create_session: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSession') }})
    default_dataset: Optional[DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultDataset') }})
    destination_encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationEncryptionConfiguration') }})
    destination_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationTable') }})
    flatten_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flattenResults') }})
    maximum_billing_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumBillingTier') }})
    maximum_bytes_billed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumBytesBilled') }})
    parameter_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterMode') }})
    preserve_nulls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preserveNulls') }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    query_parameters: Optional[List[QueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    range_partitioning: Optional[RangePartitioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangePartitioning') }})
    schema_update_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaUpdateOptions') }})
    table_definitions: Optional[dict[str, ExternalDataConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableDefinitions') }})
    time_partitioning: Optional[TimePartitioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePartitioning') }})
    use_legacy_sql: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLegacySql') }})
    use_query_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useQueryCache') }})
    user_defined_function_resources: Optional[List[UserDefinedFunctionResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedFunctionResources') }})
    write_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    
