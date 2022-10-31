from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInsightImpactGraphHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetInsightImpactGraphRequestBody:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    insight_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class GetInsightImpactGraphRequest:
    headers: GetInsightImpactGraphHeaders = field(default=None)
    request: GetInsightImpactGraphRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetInsightImpactGraphResponse:
    content_type: str = field(default=None)
    get_insight_impact_graph_result: Optional[shared.GetInsightImpactGraphResult] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
