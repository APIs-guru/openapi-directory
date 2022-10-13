from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import prompt
from . import statement


@dataclass_json
@dataclass
class FollowUpPrompt:
    prompt: prompt.Prompt = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prompt' }})
    rejection_statement: statement.Statement = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectionStatement' }})
    
