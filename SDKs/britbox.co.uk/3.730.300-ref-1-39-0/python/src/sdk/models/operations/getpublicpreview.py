from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublicPreviewResponse:
    content_type: str = field()
    status_code: int = field()
    samsung_preview: Optional[shared.SamsungPreview] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
