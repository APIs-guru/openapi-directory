from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExternalDataConfiguration:
    autodetect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodetect') }})
    avro_options: Optional[AvroOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avroOptions') }})
    bigtable_options: Optional[BigtableOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigtableOptions') }})
    compression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compression') }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    csv_options: Optional[CsvOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvOptions') }})
    decimal_target_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalTargetTypes') }})
    google_sheets_options: Optional[GoogleSheetsOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleSheetsOptions') }})
    hive_partitioning_options: Optional[HivePartitioningOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hivePartitioningOptions') }})
    ignore_unknown_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreUnknownValues') }})
    max_bad_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBadRecords') }})
    metadata_cache_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataCacheMode') }})
    object_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectMetadata') }})
    parquet_options: Optional[ParquetOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parquetOptions') }})
    reference_file_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceFileSchemaUri') }})
    schema: Optional[TableSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    source_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFormat') }})
    source_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUris') }})
    
