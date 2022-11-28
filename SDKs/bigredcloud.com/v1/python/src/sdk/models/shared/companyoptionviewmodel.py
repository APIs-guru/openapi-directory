from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CompanyOptionViewModel:
    allow_entry_of_gross_price_in_invoicing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowEntryOfGrossPriceInInvoicing') }})
    credit_input_for_reverse_charge_vat: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditInputForReverseChargeVAT') }})
    credit_note_journal_ageing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditNoteJournalAgeingName') }})
    credit_note_journal_ageing_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditNoteJournalAgeingValue') }})
    discrepancy_allowed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discrepancyAllowed') }})
    enable_vocr_reporting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableVOCRReporting') }})
    margin_vat_scheme: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginVatScheme') }})
    print_os_items_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printOSItemsOnly') }})
    purchases_vat_analysis_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchasesVatAnalysisType') }})
    sales_vat_analysis_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesVatAnalysisType') }})
    use_allocations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAllocations') }})
    use_nominal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useNominal') }})
    use_nominal_code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useNominalCode') }})
    vocr_setting_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vocrSettingValue') }})
    
