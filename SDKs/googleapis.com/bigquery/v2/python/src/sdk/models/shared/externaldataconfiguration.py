from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import avrooptions
from . import bigtableoptions
from . import csvoptions
from . import googlesheetsoptions
from . import hivepartitioningoptions
from . import parquetoptions
from . import tableschema


@dataclass_json
@dataclass
class ExternalDataConfiguration:
    autodetect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autodetect' }})
    avro_options: Optional[avrooptions.AvroOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avroOptions' }})
    bigtable_options: Optional[bigtableoptions.BigtableOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigtableOptions' }})
    compression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compression' }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    csv_options: Optional[csvoptions.CsvOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvOptions' }})
    decimal_target_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decimalTargetTypes' }})
    google_sheets_options: Optional[googlesheetsoptions.GoogleSheetsOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleSheetsOptions' }})
    hive_partitioning_options: Optional[hivepartitioningoptions.HivePartitioningOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hivePartitioningOptions' }})
    ignore_unknown_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreUnknownValues' }})
    max_bad_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBadRecords' }})
    parquet_options: Optional[parquetoptions.ParquetOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parquetOptions' }})
    reference_file_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceFileSchemaUri' }})
    schema: Optional[tableschema.TableSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    source_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFormat' }})
    source_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUris' }})
    
