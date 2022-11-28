from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TableRestoreStatus:
    r"""TableRestoreStatus
    Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
    """
    
    cluster_identifier: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    new_table_name: Optional[str] = field(default=None)
    progress_in_mega_bytes: Optional[int] = field(default=None)
    request_time: Optional[datetime] = field(default=None)
    snapshot_identifier: Optional[str] = field(default=None)
    source_database_name: Optional[str] = field(default=None)
    source_schema_name: Optional[str] = field(default=None)
    source_table_name: Optional[str] = field(default=None)
    status: Optional[TableRestoreStatusTypeEnum] = field(default=None)
    table_restore_request_id: Optional[str] = field(default=None)
    target_database_name: Optional[str] = field(default=None)
    target_schema_name: Optional[str] = field(default=None)
    total_data_in_mega_bytes: Optional[int] = field(default=None)
    
