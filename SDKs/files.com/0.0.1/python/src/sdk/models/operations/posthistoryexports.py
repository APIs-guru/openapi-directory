from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostHistoryExportsRequestBody:
    end_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'end_at' }})
    query_action: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_action' }})
    query_destination: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_destination' }})
    query_failure_type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_failure_type' }})
    query_file_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_file_id' }})
    query_folder: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_folder' }})
    query_interface: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_interface' }})
    query_ip: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_ip' }})
    query_parent_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_parent_id' }})
    query_path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_path' }})
    query_src: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_src' }})
    query_target_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_id' }})
    query_target_name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_name' }})
    query_target_permission: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_permission' }})
    query_target_permission_set: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_permission_set' }})
    query_target_platform: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_platform' }})
    query_target_user_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_user_id' }})
    query_target_username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_username' }})
    query_user_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_user_id' }})
    query_username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_username' }})
    start_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'start_at' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostHistoryExportsRequest:
    request: Optional[PostHistoryExportsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostHistoryExportsResponse:
    content_type: str = field(default=None)
    history_export_entity: Optional[shared.HistoryExportEntity] = field(default=None)
    status_code: int = field(default=None)
    
