from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class UpdateArtifactRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class UpdateArtifactRuleConfigPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    rule: UpdateArtifactRuleConfigRuleEnum = field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactRuleConfigRequest:
    path_params: UpdateArtifactRuleConfigPathParams = field()
    request: shared.Rule = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateArtifactRuleConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    
