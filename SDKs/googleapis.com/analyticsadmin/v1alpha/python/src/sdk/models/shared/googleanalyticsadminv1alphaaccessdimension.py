from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessDimension:
    r"""GoogleAnalyticsAdminV1alphaAccessDimension
    Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.
    """
    
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionName') }})
    
