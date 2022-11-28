from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatasetImportJobSummary:
    r"""DatasetImportJobSummary
    Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API.
    """
    
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_import_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetImportJobArn') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
