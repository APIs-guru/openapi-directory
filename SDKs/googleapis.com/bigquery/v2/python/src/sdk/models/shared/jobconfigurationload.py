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
class JobConfigurationLoad:
    allow_jagged_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowJaggedRows') }})
    allow_quoted_newlines: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowQuotedNewlines') }})
    autodetect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodetect') }})
    clustering: Optional[Clustering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clustering') }})
    connection_properties: Optional[List[ConnectionProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionProperties') }})
    create_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDisposition') }})
    create_session: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSession') }})
    decimal_target_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalTargetTypes') }})
    destination_encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationEncryptionConfiguration') }})
    destination_table: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationTable') }})
    destination_table_properties: Optional[DestinationTableProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationTableProperties') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    field_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldDelimiter') }})
    hive_partitioning_options: Optional[HivePartitioningOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hivePartitioningOptions') }})
    ignore_unknown_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreUnknownValues') }})
    json_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonExtension') }})
    max_bad_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBadRecords') }})
    null_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullMarker') }})
    parquet_options: Optional[ParquetOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parquetOptions') }})
    preserve_ascii_control_characters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preserveAsciiControlCharacters') }})
    projection_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectionFields') }})
    quote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote') }})
    range_partitioning: Optional[RangePartitioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangePartitioning') }})
    reference_file_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceFileSchemaUri') }})
    schema: Optional[TableSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    schema_inline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaInline') }})
    schema_inline_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaInlineFormat') }})
    schema_update_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaUpdateOptions') }})
    skip_leading_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipLeadingRows') }})
    source_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFormat') }})
    source_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUris') }})
    time_partitioning: Optional[TimePartitioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePartitioning') }})
    use_avro_logical_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAvroLogicalTypes') }})
    write_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    
