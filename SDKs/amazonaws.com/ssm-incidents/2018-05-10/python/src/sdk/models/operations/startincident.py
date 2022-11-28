from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StartIncidentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartIncidentRequestBodyTriggerDetails:
    r"""StartIncidentRequestBodyTriggerDetails
    Details about what caused the incident to be created in Incident Manager.
    """
    
    raw_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawData') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trigger_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerArn') }})
    

@dataclass_json
@dataclass
class StartIncidentRequestBody:
    response_plan_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePlanArn') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    related_items: Optional[List[shared.RelatedItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedItems') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    trigger_details: Optional[StartIncidentRequestBodyTriggerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDetails') }})
    

@dataclass
class StartIncidentRequest:
    headers: StartIncidentHeaders = field()
    request: StartIncidentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartIncidentResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    start_incident_output: Optional[shared.StartIncidentOutput] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
