from dataclasses import dataclass, field



@dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDPathParams:
    change_set_id: int = field(metadata={'path_param': { 'field_name': 'change-set-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDRequest:
    path_params: DeleteV3AssetChangesChangeSetsChangeSetIDPathParams = field()
    

@dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDResponse:
    content_type: str = field()
    status_code: int = field()
    
