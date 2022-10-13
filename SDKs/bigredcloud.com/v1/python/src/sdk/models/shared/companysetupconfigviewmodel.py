from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import companyfinancialyearviewmodel
from . import companygeneraldetaisviewmodel
from . import companyoptionviewmodel
from . import companyreferencesettingviewmodel


@dataclass_json
@dataclass
class CompanySetupConfigViewModel:
    financial_year: Optional[companyfinancialyearviewmodel.CompanyFinancialYearViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'financialYear' }})
    general_details: Optional[companygeneraldetaisviewmodel.CompanyGeneralDetaisViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generalDetails' }})
    options: Optional[companyoptionviewmodel.CompanyOptionViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    reference_settings: Optional[companyreferencesettingviewmodel.CompanyReferenceSettingViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceSettings' }})
    
