from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import voicetemplateresponse


@dataclass_json
@dataclass
class GetVoiceTemplateResponse:
    voice_template_response: voicetemplateresponse.VoiceTemplateResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceTemplateResponse' }})
    
