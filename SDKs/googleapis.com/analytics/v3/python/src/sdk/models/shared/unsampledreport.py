from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnsampledReportCloudStorageDownloadDetails:
    bucket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketId' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    

@dataclass_json
@dataclass
class UnsampledReportDriveDownloadDetails:
    document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentId' }})
    

@dataclass_json
@dataclass
class UnsampledReport:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    cloud_storage_download_details: Optional[UnsampledReportCloudStorageDownloadDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudStorageDownloadDetails' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimensions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    download_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadType' }})
    drive_download_details: Optional[UnsampledReportDriveDownloadDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveDownloadDetails' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end-date' }})
    filters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metrics: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start-date' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    
