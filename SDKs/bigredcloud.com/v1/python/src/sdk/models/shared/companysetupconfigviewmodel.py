from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompanySetupConfigViewModel:
    financial_year: Optional[CompanyFinancialYearViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('financialYear') }})
    general_details: Optional[CompanyGeneralDetaisViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalDetails') }})
    options: Optional[CompanyOptionViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reference_settings: Optional[CompanyReferenceSettingViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceSettings') }})
    
