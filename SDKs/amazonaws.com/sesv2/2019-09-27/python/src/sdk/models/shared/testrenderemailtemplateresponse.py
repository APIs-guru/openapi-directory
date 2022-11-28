from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestRenderEmailTemplateResponse:
    r"""TestRenderEmailTemplateResponse
    The following element is returned by the service.
    """
    
    rendered_template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenderedTemplate') }})
    
