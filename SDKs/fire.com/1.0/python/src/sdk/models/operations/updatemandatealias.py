from dataclasses import dataclass, field



@dataclass
class UpdateMandateAliasPathParams:
    mandate_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMandateAliasRequest:
    path_params: UpdateMandateAliasPathParams = field(default=None)
    

@dataclass
class UpdateMandateAliasResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
