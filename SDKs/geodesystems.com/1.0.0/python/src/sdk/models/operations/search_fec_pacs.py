from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchFecPacsQueryParams:
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
    search_db_fec_pacs_beginning_cash: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.beginning_cash', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_candidate_loan_repayments: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.candidate_loan_repayments', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.committee', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_contributions_from_candidate: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.contributions_from_candidate', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_contributions_from_individuals: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.contributions_from_individuals', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_contributions_from_other_committees: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.contributions_from_other_committees', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_contributions_to_other_committee: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.contributions_to_other_committee', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_ending_cash: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.ending_cash', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_loan_repayments: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.loan_repayments', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_loans_from_candidate: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.loans_from_candidate', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_refends_to_othercommittees: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.refends_to_othercommittees', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_refunds_to_individuals: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.refunds_to_individuals', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_total_distributions: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.total_distributions', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_total_loans_received: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.total_loans_received', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_total_receipts: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.total_receipts', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_trans_from_affiliates: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.trans_from_affiliates', 'style': 'form', 'explode': True }})
    search_db_fec_pacs_transfers_to_affiliates: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_fec_pacs.transfers_to_affiliates', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchFecPacsRequest:
    query_params: SearchFecPacsQueryParams = field(default=None)
    

@dataclass
class SearchFecPacsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
