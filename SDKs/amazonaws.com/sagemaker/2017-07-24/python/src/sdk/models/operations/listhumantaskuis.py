from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ListHumanTaskUisQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListHumanTaskUisXAmzTargetEnum(str, Enum):
    SAGE_MAKER_LIST_HUMAN_TASK_UIS = "SageMaker.ListHumanTaskUis"


@dataclass
class ListHumanTaskUisHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListHumanTaskUisXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListHumanTaskUisRequest:
    query_params: ListHumanTaskUisQueryParams = field(default=None)
    headers: ListHumanTaskUisHeaders = field(default=None)
    request: shared.ListHumanTaskUisRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListHumanTaskUisResponse:
    content_type: str = field(default=None)
    list_human_task_uis_response: Optional[shared.ListHumanTaskUisResponse] = field(default=None)
    status_code: int = field(default=None)
    
