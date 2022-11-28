from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateArtifactStatePathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactStateRequest:
    path_params: UpdateArtifactStatePathParams = field()
    request: shared.UpdateState = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateArtifactStateResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
