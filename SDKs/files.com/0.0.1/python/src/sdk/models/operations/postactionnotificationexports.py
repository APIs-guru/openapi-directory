from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostActionNotificationExportsRequestBody:
    end_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'end_at' }})
    query_folder: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_folder' }})
    query_message: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_message' }})
    query_path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_path' }})
    query_request_method: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_request_method' }})
    query_request_url: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_request_url' }})
    query_status: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_status' }})
    query_success: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'query_success' }})
    start_at: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'start_at' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostActionNotificationExportsRequest:
    request: Optional[PostActionNotificationExportsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostActionNotificationExportsResponse:
    content_type: str = field()
    status_code: int = field()
    action_notification_export_entity: Optional[shared.ActionNotificationExportEntity] = field(default=None)
    
