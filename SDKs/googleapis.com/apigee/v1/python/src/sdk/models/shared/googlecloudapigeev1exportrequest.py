from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1daterange


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ExportRequest:
    csv_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvDelimiter' }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreName' }})
    date_range: Optional[googlecloudapigeev1daterange.GoogleCloudApigeeV1DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFormat' }})
    
