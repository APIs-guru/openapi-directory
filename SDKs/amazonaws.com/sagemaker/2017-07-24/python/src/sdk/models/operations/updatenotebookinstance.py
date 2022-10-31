from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateNotebookInstanceXAmzTargetEnum(str, Enum):
    SAGE_MAKER_UPDATE_NOTEBOOK_INSTANCE = "SageMaker.UpdateNotebookInstance"


@dataclass
class UpdateNotebookInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateNotebookInstanceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNotebookInstanceRequest:
    headers: UpdateNotebookInstanceHeaders = field(default=None)
    request: shared.UpdateNotebookInstanceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNotebookInstanceResponse:
    content_type: str = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_notebook_instance_output: Optional[dict[str, Any]] = field(default=None)
    
