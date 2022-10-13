from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartIncidentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class StartIncidentRequestBodyTriggerDetails:
    raw_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawData' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trigger_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerArn' }})
    

@dataclass_json
@dataclass
class StartIncidentRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impact' }})
    related_items: Optional[List[shared.RelatedItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedItems' }})
    response_plan_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePlanArn' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    trigger_details: Optional[StartIncidentRequestBodyTriggerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerDetails' }})
    

@dataclass
class StartIncidentRequest:
    headers: StartIncidentHeaders = field(default=None)
    request: StartIncidentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartIncidentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    start_incident_output: Optional[shared.StartIncidentOutput] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
