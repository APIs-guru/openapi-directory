from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompanySettingsGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_company_setting_dto_: Optional[shared.PageResultCompanySettingDto] = field(default=None)
    
