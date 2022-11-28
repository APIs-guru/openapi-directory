from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UnsampledReportCloudStorageDownloadDetails:
    r"""UnsampledReportCloudStorageDownloadDetails
    Download details for a file stored in Google Cloud Storage.
    """
    
    bucket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketId') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    

@dataclass_json
@dataclass
class UnsampledReportDriveDownloadDetails:
    r"""UnsampledReportDriveDownloadDetails
    Download details for a file stored in Google Drive.
    """
    
    document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentId') }})
    

@dataclass_json
@dataclass
class UnsampledReportInput:
    r"""UnsampledReportInput
    JSON template for Analytics unsampled report resource.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    dimensions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end-date') }})
    filters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metrics: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start-date') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclass
class UnsampledReport:
    r"""UnsampledReport
    JSON template for Analytics unsampled report resource.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    cloud_storage_download_details: Optional[UnsampledReportCloudStorageDownloadDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageDownloadDetails') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimensions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    download_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadType') }})
    drive_download_details: Optional[UnsampledReportDriveDownloadDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveDownloadDetails') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end-date') }})
    filters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metrics: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start-date') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    
