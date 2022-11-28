from dataclasses import dataclass, field



@dataclass
class DeleteSettingPathParams:
    setting_id: int = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSettingRequest:
    path_params: DeleteSettingPathParams = field()
    

@dataclass
class DeleteSettingResponse:
    content_type: str = field()
    status_code: int = field()
    
