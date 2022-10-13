from dataclasses import dataclass, field



@dataclass
class DeleteSettingPathParams:
    setting_id: int = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSettingRequest:
    path_params: DeleteSettingPathParams = field(default=None)
    

@dataclass
class DeleteSettingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
