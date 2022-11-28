from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchFeccandidatesQueryParams:
    changedate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_db_feccandidates_beginning_cash: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.beginning_cash', 'style': 'form', 'explode': True }})
    search_db_feccandidates_candidate_loan_repayments: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.candidate_loan_repayments', 'style': 'form', 'explode': True }})
    search_db_feccandidates_committee_refunds: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.committee_refunds', 'style': 'form', 'explode': True }})
    search_db_feccandidates_contributions_from_candidate: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.contributions_from_candidate', 'style': 'form', 'explode': True }})
    search_db_feccandidates_contributions_from_other_committees: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.contributions_from_other_committees', 'style': 'form', 'explode': True }})
    search_db_feccandidates_contributions_from_party_committees: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.contributions_from_party_committees', 'style': 'form', 'explode': True }})
    search_db_feccandidates_coverage_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.coverage_end_date', 'style': 'form', 'explode': True }})
    search_db_feccandidates_debts_owed_by: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.debts_owed_by', 'style': 'form', 'explode': True }})
    search_db_feccandidates_district: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.district', 'style': 'form', 'explode': True }})
    search_db_feccandidates_ending_cash: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.ending_cash', 'style': 'form', 'explode': True }})
    search_db_feccandidates_gender: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.gender', 'style': 'form', 'explode': True }})
    search_db_feccandidates_individual_refunds: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.individual_refunds', 'style': 'form', 'explode': True }})
    search_db_feccandidates_loans_from_candidates: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.loans_from_candidates', 'style': 'form', 'explode': True }})
    search_db_feccandidates_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.name', 'style': 'form', 'explode': True }})
    search_db_feccandidates_other_loan_repayments: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.other_loan_repayments', 'style': 'form', 'explode': True }})
    search_db_feccandidates_other_loans: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.other_loans', 'style': 'form', 'explode': True }})
    search_db_feccandidates_party: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.party', 'style': 'form', 'explode': True }})
    search_db_feccandidates_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.state', 'style': 'form', 'explode': True }})
    search_db_feccandidates_total_disbursements: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.total_disbursements', 'style': 'form', 'explode': True }})
    search_db_feccandidates_total_indivual_contributions: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.total_indivual_contributions', 'style': 'form', 'explode': True }})
    search_db_feccandidates_total_receipts: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.total_receipts', 'style': 'form', 'explode': True }})
    search_db_feccandidates_transfers_from_committees: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.transfers_from_committees', 'style': 'form', 'explode': True }})
    search_db_feccandidates_transfers_to_committees: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_feccandidates.transfers_to_committees', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchFeccandidatesRequest:
    query_params: SearchFeccandidatesQueryParams = field()
    

@dataclass
class SearchFeccandidatesResponse:
    content_type: str = field()
    status_code: int = field()
    
