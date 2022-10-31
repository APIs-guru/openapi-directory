from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateConfigurationSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetRequestBodyDeliveryOptions:
    sending_pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingPoolName' }})
    tls_policy: Optional[shared.TLSPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TlsPolicy' }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetRequestBodyReputationOptions:
    last_fresh_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFreshStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reputation_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReputationMetricsEnabled' }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetRequestBodySendingOptions:
    sending_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingEnabled' }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetRequestBodyTrackingOptions:
    custom_redirect_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomRedirectDomain' }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetRequestBody:
    configuration_set_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSetName' }})
    delivery_options: Optional[CreateConfigurationSetRequestBodyDeliveryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryOptions' }})
    reputation_options: Optional[CreateConfigurationSetRequestBodyReputationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReputationOptions' }})
    sending_options: Optional[CreateConfigurationSetRequestBodySendingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingOptions' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    tracking_options: Optional[CreateConfigurationSetRequestBodyTrackingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingOptions' }})
    

@dataclass
class CreateConfigurationSetRequest:
    headers: CreateConfigurationSetHeaders = field(default=None)
    request: CreateConfigurationSetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConfigurationSetResponse:
    already_exists_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_configuration_set_response: Optional[dict[str, Any]] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
