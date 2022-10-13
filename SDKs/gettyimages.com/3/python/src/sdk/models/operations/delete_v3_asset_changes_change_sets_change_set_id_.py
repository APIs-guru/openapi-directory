from dataclasses import dataclass, field



@dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDPathParams:
    change_set_id: int = field(default=None, metadata={'path_param': { 'field_name': 'change-set-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDRequest:
    path_params: DeleteV3AssetChangesChangeSetsChangeSetIDPathParams = field(default=None)
    

@dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
