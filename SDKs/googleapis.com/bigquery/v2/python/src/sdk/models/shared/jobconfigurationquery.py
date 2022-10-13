from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clustering
from . import connectionproperty
from . import datasetreference
from . import encryptionconfiguration
from . import tablereference
from . import queryparameter
from . import rangepartitioning
from . import externaldataconfiguration
from . import timepartitioning
from . import userdefinedfunctionresource


@dataclass_json
@dataclass
class JobConfigurationQuery:
    allow_large_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowLargeResults' }})
    clustering: Optional[clustering.Clustering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clustering' }})
    connection_properties: Optional[List[connectionproperty.ConnectionProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionProperties' }})
    create_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDisposition' }})
    create_session: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSession' }})
    default_dataset: Optional[datasetreference.DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultDataset' }})
    destination_encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationEncryptionConfiguration' }})
    destination_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationTable' }})
    flatten_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flattenResults' }})
    maximum_billing_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumBillingTier' }})
    maximum_bytes_billed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumBytesBilled' }})
    parameter_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterMode' }})
    preserve_nulls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preserveNulls' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    query_parameters: Optional[List[queryparameter.QueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    range_partitioning: Optional[rangepartitioning.RangePartitioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangePartitioning' }})
    schema_update_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaUpdateOptions' }})
    table_definitions: Optional[dict[str, externaldataconfiguration.ExternalDataConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableDefinitions' }})
    time_partitioning: Optional[timepartitioning.TimePartitioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timePartitioning' }})
    use_legacy_sql: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLegacySql' }})
    use_query_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useQueryCache' }})
    user_defined_function_resources: Optional[List[userdefinedfunctionresource.UserDefinedFunctionResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefinedFunctionResources' }})
    write_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeDisposition' }})
    
