from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import codesigningconfig


@dataclass_json
@dataclass
class UpdateCodeSigningConfigResponse:
    code_signing_config: codesigningconfig.CodeSigningConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningConfig' }})
    
