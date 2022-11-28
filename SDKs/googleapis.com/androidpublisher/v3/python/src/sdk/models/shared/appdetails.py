from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppDetails:
    r"""AppDetails
    The app details. The resource for DetailsService.
    """
    
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPhone') }})
    contact_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactWebsite') }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    
