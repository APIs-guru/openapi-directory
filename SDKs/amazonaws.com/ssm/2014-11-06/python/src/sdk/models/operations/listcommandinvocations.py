from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListCommandInvocationsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCommandInvocationsXAmzTargetEnum(str, Enum):
    AMAZON_SSM_LIST_COMMAND_INVOCATIONS = "AmazonSSM.ListCommandInvocations"


@dataclass
class ListCommandInvocationsHeaders:
    x_amz_target: ListCommandInvocationsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCommandInvocationsRequest:
    headers: ListCommandInvocationsHeaders = field()
    query_params: ListCommandInvocationsQueryParams = field()
    request: shared.ListCommandInvocationsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListCommandInvocationsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_error: Optional[Any] = field(default=None)
    invalid_command_id: Optional[Any] = field(default=None)
    invalid_filter_key: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    list_command_invocations_result: Optional[shared.ListCommandInvocationsResult] = field(default=None)
    
