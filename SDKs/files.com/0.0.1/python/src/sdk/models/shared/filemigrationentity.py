from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FileMigrationEntityOperationEnum(str, Enum):
    DELETE = "delete"
    MOVE = "move"
    COPY = "copy"

class FileMigrationEntityStatusEnum(str, Enum):
    PENDING = "pending"
    COUNTING = "counting"
    PROCESSING = "processing"
    COMPLETE = "complete"
    PROCESSING_SUBFOLDERS = "processing_subfolders"
    FINISHING = "finishing"
    CREATING_DEST_FOLDER = "creating_dest_folder"
    WAITING_FOR_OTHER_JOBS = "waiting_for_other_jobs"
    WAITING_FOR_ALL_FILES = "waiting_for_all_files"
    WAITING_FOR_PENDING_SUBFOLDERS = "waiting_for_pending_subfolders"
    WAITING_FOR_ALL_SUBFOLDERS = "waiting_for_all_subfolders"
    FAILED = "failed"
    WAITING_FOR_ENQUEUED_OPERATIONS = "waiting_for_enqueued_operations"
    PROCESSING_DEFERRED_FOLDERS = "processing_deferred_folders"
    PROCESSING_RECURSIVELY = "processing_recursively"
    REMOVING_DEFERRED_FOLDERS = "removing_deferred_folders"


@dataclass_json
@dataclass
class FileMigrationEntity:
    dest_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dest_path' }})
    files_moved: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files_moved' }})
    files_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files_total' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log_url' }})
    operation: Optional[FileMigrationEntityOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    status: Optional[FileMigrationEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
