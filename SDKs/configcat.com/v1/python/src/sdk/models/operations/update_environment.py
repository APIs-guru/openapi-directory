from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateEnvironmentPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnvironmentRequests:
    update_environment_model: Optional[shared.UpdateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_environment_model1: Optional[shared.UpdateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_environment_model2: Optional[shared.UpdateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateEnvironmentRequest:
    path_params: UpdateEnvironmentPathParams = field()
    request: UpdateEnvironmentRequests = field()
    

@dataclass
class UpdateEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    environment_model: Optional[shared.EnvironmentModel] = field(default=None)
    environment_model_haljson: Optional[shared.EnvironmentModelHaljson] = field(default=None)
    
