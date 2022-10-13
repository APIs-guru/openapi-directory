from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PresidentialSummary:
    candidate_contributions_less_repayments: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_contributions_less_repayments' }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    candidate_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_last_name' }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_name' }})
    candidate_party_affiliation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_party_affiliation' }})
    cash_on_hand_end: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_on_hand_end' }})
    committee_designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_designation' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_name' }})
    committee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_type' }})
    debts_owed_by_committee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debts_owed_by_committee' }})
    disbursements_less_offsets: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursements_less_offsets' }})
    election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_year' }})
    exempt_legal_accounting_disbursement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exempt_legal_accounting_disbursement' }})
    federal_funds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federal_funds' }})
    fundraising_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundraising_disbursements' }})
    individual_contributions_less_refunds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual_contributions_less_refunds' }})
    net_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_receipts' }})
    offsets_to_operating_expenditures: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsets_to_operating_expenditures' }})
    operating_expenditures: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operating_expenditures' }})
    other_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_disbursements' }})
    pac_contributions_less_refunds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pac_contributions_less_refunds' }})
    party_contributions_less_refunds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party_contributions_less_refunds' }})
    repayments_loans_made_by_candidate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repayments_loans_made_by_candidate' }})
    repayments_other_loans: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repayments_other_loans' }})
    rounded_net_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounded_net_receipts' }})
    total_contribution_refunds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_contribution_refunds' }})
    total_loan_repayments_made: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_loan_repayments_made' }})
    transfers_from_affiliated_committees: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfers_from_affiliated_committees' }})
    transfers_to_other_authorized_committees: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfers_to_other_authorized_committees' }})
    
