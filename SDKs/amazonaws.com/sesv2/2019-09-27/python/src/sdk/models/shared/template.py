from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Template:
    r"""Template
    An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.
    """
    
    template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateArn') }})
    template_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateData') }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    
