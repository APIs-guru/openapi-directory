from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class GetLegalSearchAoCategoryEnum(str, Enum):
    F = "F"
    V = "V"
    D = "D"
    R = "R"
    W = "W"
    C = "C"
    S = "S"


@dataclass
class GetLegalSearchQueryParams:
    af_committee_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'af_committee_id', 'style': 'form', 'explode': True }})
    af_fd_fine_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'af_fd_fine_amount', 'style': 'form', 'explode': True }})
    af_max_fd_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'af_max_fd_date', 'style': 'form', 'explode': True }})
    af_max_rtb_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'af_max_rtb_date', 'style': 'form', 'explode': True }})
    af_min_fd_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'af_min_fd_date', 'style': 'form', 'explode': True }})
    af_min_rtb_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'af_min_rtb_date', 'style': 'form', 'explode': True }})
    af_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'af_name', 'style': 'form', 'explode': True }})
    af_report_year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'af_report_year', 'style': 'form', 'explode': True }})
    af_rtb_fine_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'af_rtb_fine_amount', 'style': 'form', 'explode': True }})
    ao_category: Optional[List[GetLegalSearchAoCategoryEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ao_category', 'style': 'form', 'explode': True }})
    ao_citation_require_all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ao_citation_require_all', 'style': 'form', 'explode': True }})
    ao_entity_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ao_entity_name', 'style': 'form', 'explode': True }})
    ao_is_pending: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ao_is_pending', 'style': 'form', 'explode': True }})
    ao_max_issue_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ao_max_issue_date', 'style': 'form', 'explode': True }})
    ao_max_request_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ao_max_request_date', 'style': 'form', 'explode': True }})
    ao_min_issue_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ao_min_issue_date', 'style': 'form', 'explode': True }})
    ao_min_request_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ao_min_request_date', 'style': 'form', 'explode': True }})
    ao_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ao_name', 'style': 'form', 'explode': True }})
    ao_no: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ao_no', 'style': 'form', 'explode': True }})
    ao_regulatory_citation: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ao_regulatory_citation', 'style': 'form', 'explode': True }})
    ao_requestor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ao_requestor', 'style': 'form', 'explode': True }})
    ao_requestor_type: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'ao_requestor_type', 'style': 'form', 'explode': True }})
    ao_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ao_status', 'style': 'form', 'explode': True }})
    ao_statutory_citation: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ao_statutory_citation', 'style': 'form', 'explode': True }})
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    case_dispositions: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'case_dispositions', 'style': 'form', 'explode': True }})
    case_document_category: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'case_document_category', 'style': 'form', 'explode': True }})
    case_election_cycles: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'case_election_cycles', 'style': 'form', 'explode': True }})
    case_max_close_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'case_max_close_date', 'style': 'form', 'explode': True }})
    case_max_open_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'case_max_open_date', 'style': 'form', 'explode': True }})
    case_min_close_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'case_min_close_date', 'style': 'form', 'explode': True }})
    case_min_open_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'case_min_open_date', 'style': 'form', 'explode': True }})
    case_no: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'case_no', 'style': 'form', 'explode': True }})
    case_respondents: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'case_respondents', 'style': 'form', 'explode': True }})
    from_hit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from_hit', 'style': 'form', 'explode': True }})
    hits_returned: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'hits_returned', 'style': 'form', 'explode': True }})
    mur_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mur_type', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLegalSearchRequest:
    query_params: GetLegalSearchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    vote_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vote_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdminFinesDocuments:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_id' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdminFines:
    challenge_outcome: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge_outcome' }})
    challenge_receipt_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge_receipt_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    check_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_amount' }})
    commission_votes: Optional[List[GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commission_votes' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    doc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doc_id' }})
    document_highlights: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_highlights' }})
    documents: Optional[List[GetLegalSearchDefaultApplicationJSONAdminFinesDocuments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    final_determination_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'final_determination_amount' }})
    final_determination_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'final_determination_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    highlights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    petition_court_decision_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'petition_court_decision_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    petition_court_filing_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'petition_court_filing_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason_to_believe_action_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason_to_believe_action_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason_to_believe_fine_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason_to_believe_fine_amount' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    report_year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_year' }})
    treasury_referral_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasury_referral_amount' }})
    treasury_referral_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasury_referral_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    vote_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vote_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdrsDispositions:
    citations: Optional[List[GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'citations' }})
    disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disposition' }})
    penalty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'penalty' }})
    respondent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondent' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdrsDocuments:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_id' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdrsParticipants:
    citations: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'citations' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdrs:
    close_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'close_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    commission_votes: Optional[List[GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commission_votes' }})
    dispositions: Optional[List[GetLegalSearchDefaultApplicationJSONAdrsDispositions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispositions' }})
    doc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doc_id' }})
    document_highlights: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_highlights' }})
    documents: Optional[List[GetLegalSearchDefaultApplicationJSONAdrsDocuments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    election_cycles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_cycles' }})
    highlights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    open_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    participants: Optional[List[GetLegalSearchDefaultApplicationJSONAdrsParticipants]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    respondents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondents' }})
    subjects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjects' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations:
    part: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'part' }})
    section: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    title: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations:
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    title: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONAdvisoryOpinions:
    ao_citations: Optional[List[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ao_citations' }})
    aos_cited_by: Optional[List[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aos_cited_by' }})
    commenter_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commenter_names' }})
    document_highlights: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_highlights' }})
    documents: Optional[List[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    entities: Optional[List[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    highlights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    is_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_pending' }})
    issue_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    regulatory_citations: Optional[List[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regulatory_citations' }})
    representative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'representative_names' }})
    request_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requestor_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestor_names' }})
    requestor_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestor_types' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    statutory_citations: Optional[List[GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statutory_citations' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONMursCommissionVotes:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    vote_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vote_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONMursDispositionsCitations:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONMursDispositions:
    citations: Optional[List[GetLegalSearchDefaultApplicationJSONMursDispositionsCitations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'citations' }})
    disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disposition' }})
    penalty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'penalty' }})
    respondent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondent' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONMursDocuments:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_id' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class GetLegalSearchDefaultApplicationJSONMursMurTypeEnum(str, Enum):
    CURRENT = "current"
    ARCHIVED = "archived"


@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONMursParticipants:
    citations: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'citations' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONMurs:
    close_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'close_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    commission_votes: Optional[List[GetLegalSearchDefaultApplicationJSONMursCommissionVotes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commission_votes' }})
    dispositions: Optional[List[GetLegalSearchDefaultApplicationJSONMursDispositions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispositions' }})
    doc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doc_id' }})
    document_highlights: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_highlights' }})
    documents: Optional[List[GetLegalSearchDefaultApplicationJSONMursDocuments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    election_cycles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_cycles' }})
    highlights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    mur_type: Optional[GetLegalSearchDefaultApplicationJSONMursMurTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mur_type' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    open_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    participants: Optional[List[GetLegalSearchDefaultApplicationJSONMursParticipants]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    respondents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondents' }})
    subjects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjects' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONRegulations:
    doc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doc_id' }})
    document_highlights: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_highlights' }})
    highlights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSONStatutes:
    chapter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chapter' }})
    doc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doc_id' }})
    document_highlights: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_highlights' }})
    highlights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'no' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLegalSearchDefaultApplicationJSON:
    admin_fines: Optional[List[GetLegalSearchDefaultApplicationJSONAdminFines]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin_fines' }})
    adrs: Optional[List[GetLegalSearchDefaultApplicationJSONAdrs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adrs' }})
    advisory_opinions: Optional[List[GetLegalSearchDefaultApplicationJSONAdvisoryOpinions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advisory_opinions' }})
    murs: Optional[List[GetLegalSearchDefaultApplicationJSONMurs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'murs' }})
    regulations: Optional[List[GetLegalSearchDefaultApplicationJSONRegulations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regulations' }})
    statutes: Optional[List[GetLegalSearchDefaultApplicationJSONStatutes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statutes' }})
    total_admin_fines: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_admin_fines' }})
    total_adrs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_adrs' }})
    total_advisory_opinions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_advisory_opinions' }})
    total_all: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_all' }})
    total_murs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_murs' }})
    total_regulations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_regulations' }})
    total_statutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_statutes' }})
    

@dataclass
class GetLegalSearchResponse:
    content_type: str = field(default=None)
    get_legal_search_default_application_json_object: Optional[GetLegalSearchDefaultApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
