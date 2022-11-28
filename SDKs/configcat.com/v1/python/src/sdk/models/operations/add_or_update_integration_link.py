from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AddOrUpdateIntegrationLinkPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    integration_link_type: shared.IntegrationLinkTypeEnum = field(metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    setting_id: int = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddOrUpdateIntegrationLinkRequests:
    add_or_update_integration_link_model: Optional[shared.AddOrUpdateIntegrationLinkModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    add_or_update_integration_link_model1: Optional[shared.AddOrUpdateIntegrationLinkModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_or_update_integration_link_model2: Optional[shared.AddOrUpdateIntegrationLinkModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AddOrUpdateIntegrationLinkRequest:
    path_params: AddOrUpdateIntegrationLinkPathParams = field()
    request: Optional[AddOrUpdateIntegrationLinkRequests] = field(default=None)
    

@dataclass
class AddOrUpdateIntegrationLinkResponse:
    content_type: str = field()
    status_code: int = field()
    integration_link_model: Optional[shared.IntegrationLinkModel] = field(default=None)
    
