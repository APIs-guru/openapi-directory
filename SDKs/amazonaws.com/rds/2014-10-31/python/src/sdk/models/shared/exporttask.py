from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class ExportTask:
    r"""ExportTask
    <p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p>
    """
    
    export_only: Optional[List[str]] = field(default=None)
    export_task_identifier: Optional[str] = field(default=None)
    failure_cause: Optional[str] = field(default=None)
    iam_role_arn: Optional[str] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    percent_progress: Optional[int] = field(default=None)
    s3_bucket: Optional[str] = field(default=None)
    s3_prefix: Optional[str] = field(default=None)
    snapshot_time: Optional[datetime] = field(default=None)
    source_arn: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    task_end_time: Optional[datetime] = field(default=None)
    task_start_time: Optional[datetime] = field(default=None)
    total_extracted_data_in_gb: Optional[int] = field(default=None)
    warning_message: Optional[str] = field(default=None)
    
