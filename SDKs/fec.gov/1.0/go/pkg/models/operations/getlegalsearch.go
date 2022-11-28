package operations

import (
	"time"
)

type GetLegalSearchAoCategoryEnum string

const (
	GetLegalSearchAoCategoryEnumF GetLegalSearchAoCategoryEnum = "F"
	GetLegalSearchAoCategoryEnumV GetLegalSearchAoCategoryEnum = "V"
	GetLegalSearchAoCategoryEnumD GetLegalSearchAoCategoryEnum = "D"
	GetLegalSearchAoCategoryEnumR GetLegalSearchAoCategoryEnum = "R"
	GetLegalSearchAoCategoryEnumW GetLegalSearchAoCategoryEnum = "W"
	GetLegalSearchAoCategoryEnumC GetLegalSearchAoCategoryEnum = "C"
	GetLegalSearchAoCategoryEnumS GetLegalSearchAoCategoryEnum = "S"
)

type GetLegalSearchQueryParams struct {
	AfCommitteeID        *string                        `queryParam:"style=form,explode=true,name=af_committee_id"`
	AfFdFineAmount       *int32                         `queryParam:"style=form,explode=true,name=af_fd_fine_amount"`
	AfMaxFdDate          *time.Time                     `queryParam:"style=form,explode=true,name=af_max_fd_date"`
	AfMaxRtbDate         *time.Time                     `queryParam:"style=form,explode=true,name=af_max_rtb_date"`
	AfMinFdDate          *time.Time                     `queryParam:"style=form,explode=true,name=af_min_fd_date"`
	AfMinRtbDate         *time.Time                     `queryParam:"style=form,explode=true,name=af_min_rtb_date"`
	AfName               []string                       `queryParam:"style=form,explode=true,name=af_name"`
	AfReportYear         *string                        `queryParam:"style=form,explode=true,name=af_report_year"`
	AfRtbFineAmount      *int32                         `queryParam:"style=form,explode=true,name=af_rtb_fine_amount"`
	AoCategory           []GetLegalSearchAoCategoryEnum `queryParam:"style=form,explode=true,name=ao_category"`
	AoCitationRequireAll *bool                          `queryParam:"style=form,explode=true,name=ao_citation_require_all"`
	AoEntityName         []string                       `queryParam:"style=form,explode=true,name=ao_entity_name"`
	AoIsPending          *bool                          `queryParam:"style=form,explode=true,name=ao_is_pending"`
	AoMaxIssueDate       *time.Time                     `queryParam:"style=form,explode=true,name=ao_max_issue_date"`
	AoMaxRequestDate     *time.Time                     `queryParam:"style=form,explode=true,name=ao_max_request_date"`
	AoMinIssueDate       *time.Time                     `queryParam:"style=form,explode=true,name=ao_min_issue_date"`
	AoMinRequestDate     *time.Time                     `queryParam:"style=form,explode=true,name=ao_min_request_date"`
	AoName               []string                       `queryParam:"style=form,explode=true,name=ao_name"`
	AoNo                 []string                       `queryParam:"style=form,explode=true,name=ao_no"`
	AoRegulatoryCitation []string                       `queryParam:"style=form,explode=true,name=ao_regulatory_citation"`
	AoRequestor          *string                        `queryParam:"style=form,explode=true,name=ao_requestor"`
	AoRequestorType      []int32                        `queryParam:"style=form,explode=true,name=ao_requestor_type"`
	AoStatus             *string                        `queryParam:"style=form,explode=true,name=ao_status"`
	AoStatutoryCitation  []string                       `queryParam:"style=form,explode=true,name=ao_statutory_citation"`
	APIKey               string                         `queryParam:"style=form,explode=true,name=api_key"`
	CaseDispositions     []string                       `queryParam:"style=form,explode=true,name=case_dispositions"`
	CaseDocumentCategory []string                       `queryParam:"style=form,explode=true,name=case_document_category"`
	CaseElectionCycles   *int32                         `queryParam:"style=form,explode=true,name=case_election_cycles"`
	CaseMaxCloseDate     *time.Time                     `queryParam:"style=form,explode=true,name=case_max_close_date"`
	CaseMaxOpenDate      *time.Time                     `queryParam:"style=form,explode=true,name=case_max_open_date"`
	CaseMinCloseDate     *time.Time                     `queryParam:"style=form,explode=true,name=case_min_close_date"`
	CaseMinOpenDate      *time.Time                     `queryParam:"style=form,explode=true,name=case_min_open_date"`
	CaseNo               []string                       `queryParam:"style=form,explode=true,name=case_no"`
	CaseRespondents      *string                        `queryParam:"style=form,explode=true,name=case_respondents"`
	FromHit              *int32                         `queryParam:"style=form,explode=true,name=from_hit"`
	HitsReturned         *int32                         `queryParam:"style=form,explode=true,name=hits_returned"`
	MurType              *string                        `queryParam:"style=form,explode=true,name=mur_type"`
	Q                    *string                        `queryParam:"style=form,explode=true,name=q"`
	Type                 *string                        `queryParam:"style=form,explode=true,name=type"`
}

type GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes struct {
	Action   *string    `json:"action,omitempty"`
	VoteDate *time.Time `json:"vote_date,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdminFinesDocuments struct {
	Category     *string    `json:"category,omitempty"`
	Description  *string    `json:"description,omitempty"`
	DocumentDate *time.Time `json:"document_date,omitempty"`
	DocumentID   *int64     `json:"document_id,omitempty"`
	Length       *int64     `json:"length,omitempty"`
	URL          *string    `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdminFines struct {
	ChallengeOutcome          *string                                                         `json:"challenge_outcome,omitempty"`
	ChallengeReceiptDate      *time.Time                                                      `json:"challenge_receipt_date,omitempty"`
	CheckAmount               *float64                                                        `json:"check_amount,omitempty"`
	CommissionVotes           []GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes `json:"commission_votes,omitempty"`
	CommitteeID               *string                                                         `json:"committee_id,omitempty"`
	DocID                     *string                                                         `json:"doc_id,omitempty"`
	DocumentHighlights        map[string]interface{}                                          `json:"document_highlights,omitempty"`
	Documents                 []GetLegalSearchDefaultApplicationJSONAdminFinesDocuments       `json:"documents,omitempty"`
	FinalDeterminationAmount  *float64                                                        `json:"final_determination_amount,omitempty"`
	FinalDeterminationDate    *time.Time                                                      `json:"final_determination_date,omitempty"`
	Highlights                []string                                                        `json:"highlights,omitempty"`
	Name                      *string                                                         `json:"name,omitempty"`
	No                        *string                                                         `json:"no,omitempty"`
	PetitionCourtDecisionDate *time.Time                                                      `json:"petition_court_decision_date,omitempty"`
	PetitionCourtFilingDate   *time.Time                                                      `json:"petition_court_filing_date,omitempty"`
	ReasonToBelieveActionDate *time.Time                                                      `json:"reason_to_believe_action_date,omitempty"`
	ReasonToBelieveFineAmount *float64                                                        `json:"reason_to_believe_fine_amount,omitempty"`
	ReportType                *string                                                         `json:"report_type,omitempty"`
	ReportYear                *string                                                         `json:"report_year,omitempty"`
	TreasuryReferralAmount    *float64                                                        `json:"treasury_referral_amount,omitempty"`
	TreasuryReferralDate      *time.Time                                                      `json:"treasury_referral_date,omitempty"`
	URL                       *string                                                         `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes struct {
	Action   *string    `json:"action,omitempty"`
	VoteDate *time.Time `json:"vote_date,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations struct {
	Text  *string `json:"text,omitempty"`
	Title *string `json:"title,omitempty"`
	Type  *string `json:"type,omitempty"`
	URL   *string `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdrsDispositions struct {
	Citations   []GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations `json:"citations,omitempty"`
	Disposition *string                                                         `json:"disposition,omitempty"`
	Penalty     *float64                                                        `json:"penalty,omitempty"`
	Respondent  *string                                                         `json:"respondent,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdrsDocuments struct {
	Category     *string    `json:"category,omitempty"`
	Description  *string    `json:"description,omitempty"`
	DocumentDate *time.Time `json:"document_date,omitempty"`
	DocumentID   *int64     `json:"document_id,omitempty"`
	Length       *int64     `json:"length,omitempty"`
	URL          *string    `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdrsParticipants struct {
	Citations map[string]interface{} `json:"citations,omitempty"`
	Name      *string                `json:"name,omitempty"`
	Role      *string                `json:"role,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdrs struct {
	CloseDate          *time.Time                                                `json:"close_date,omitempty"`
	CommissionVotes    []GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes `json:"commission_votes,omitempty"`
	Dispositions       []GetLegalSearchDefaultApplicationJSONAdrsDispositions    `json:"dispositions,omitempty"`
	DocID              *string                                                   `json:"doc_id,omitempty"`
	DocumentHighlights map[string]interface{}                                    `json:"document_highlights,omitempty"`
	Documents          []GetLegalSearchDefaultApplicationJSONAdrsDocuments       `json:"documents,omitempty"`
	ElectionCycles     *int64                                                    `json:"election_cycles,omitempty"`
	Highlights         []string                                                  `json:"highlights,omitempty"`
	Name               *string                                                   `json:"name,omitempty"`
	No                 *string                                                   `json:"no,omitempty"`
	OpenDate           *time.Time                                                `json:"open_date,omitempty"`
	Participants       []GetLegalSearchDefaultApplicationJSONAdrsParticipants    `json:"participants,omitempty"`
	Respondents        []string                                                  `json:"respondents,omitempty"`
	Subjects           []string                                                  `json:"subjects,omitempty"`
	URL                *string                                                   `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations struct {
	Name *string `json:"name,omitempty"`
	No   *string `json:"no,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy struct {
	Name *string `json:"name,omitempty"`
	No   *string `json:"no,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments struct {
	Category    *string    `json:"category,omitempty"`
	Date        *time.Time `json:"date,omitempty"`
	Description *string    `json:"description,omitempty"`
	DocumentID  *int64     `json:"document_id,omitempty"`
	URL         *string    `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities struct {
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
	Type *string `json:"type,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations struct {
	Part    *int64 `json:"part,omitempty"`
	Section *int64 `json:"section,omitempty"`
	Title   *int64 `json:"title,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations struct {
	Section *string `json:"section,omitempty"`
	Title   *int64  `json:"title,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinions struct {
	AoCitations         []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations         `json:"ao_citations,omitempty"`
	AosCitedBy          []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy          `json:"aos_cited_by,omitempty"`
	CommenterNames      []string                                                                  `json:"commenter_names,omitempty"`
	DocumentHighlights  map[string]interface{}                                                    `json:"document_highlights,omitempty"`
	Documents           []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments           `json:"documents,omitempty"`
	Entities            []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities            `json:"entities,omitempty"`
	Highlights          []string                                                                  `json:"highlights,omitempty"`
	IsPending           *bool                                                                     `json:"is_pending,omitempty"`
	IssueDate           *time.Time                                                                `json:"issue_date,omitempty"`
	Name                *string                                                                   `json:"name,omitempty"`
	No                  *string                                                                   `json:"no,omitempty"`
	RegulatoryCitations []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations `json:"regulatory_citations,omitempty"`
	RepresentativeNames []string                                                                  `json:"representative_names,omitempty"`
	RequestDate         *time.Time                                                                `json:"request_date,omitempty"`
	RequestorNames      []string                                                                  `json:"requestor_names,omitempty"`
	RequestorTypes      []string                                                                  `json:"requestor_types,omitempty"`
	Status              *string                                                                   `json:"status,omitempty"`
	StatutoryCitations  []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations  `json:"statutory_citations,omitempty"`
	Summary             *string                                                                   `json:"summary,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONMursCommissionVotes struct {
	Action   *string    `json:"action,omitempty"`
	VoteDate *time.Time `json:"vote_date,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONMursDispositionsCitations struct {
	Text  *string `json:"text,omitempty"`
	Title *string `json:"title,omitempty"`
	Type  *string `json:"type,omitempty"`
	URL   *string `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONMursDispositions struct {
	Citations   []GetLegalSearchDefaultApplicationJSONMursDispositionsCitations `json:"citations,omitempty"`
	Disposition *string                                                         `json:"disposition,omitempty"`
	Penalty     *float64                                                        `json:"penalty,omitempty"`
	Respondent  *string                                                         `json:"respondent,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONMursDocuments struct {
	Category     *string    `json:"category,omitempty"`
	Description  *string    `json:"description,omitempty"`
	DocumentDate *time.Time `json:"document_date,omitempty"`
	DocumentID   *int64     `json:"document_id,omitempty"`
	Length       *int64     `json:"length,omitempty"`
	URL          *string    `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONMursMurTypeEnum string

const (
	GetLegalSearchDefaultApplicationJSONMursMurTypeEnumCurrent  GetLegalSearchDefaultApplicationJSONMursMurTypeEnum = "current"
	GetLegalSearchDefaultApplicationJSONMursMurTypeEnumArchived GetLegalSearchDefaultApplicationJSONMursMurTypeEnum = "archived"
)

type GetLegalSearchDefaultApplicationJSONMursParticipants struct {
	Citations map[string]interface{} `json:"citations,omitempty"`
	Name      *string                `json:"name,omitempty"`
	Role      *string                `json:"role,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONMurs struct {
	CloseDate          *time.Time                                                `json:"close_date,omitempty"`
	CommissionVotes    []GetLegalSearchDefaultApplicationJSONMursCommissionVotes `json:"commission_votes,omitempty"`
	Dispositions       []GetLegalSearchDefaultApplicationJSONMursDispositions    `json:"dispositions,omitempty"`
	DocID              *string                                                   `json:"doc_id,omitempty"`
	DocumentHighlights map[string]interface{}                                    `json:"document_highlights,omitempty"`
	Documents          []GetLegalSearchDefaultApplicationJSONMursDocuments       `json:"documents,omitempty"`
	ElectionCycles     *int64                                                    `json:"election_cycles,omitempty"`
	Highlights         []string                                                  `json:"highlights,omitempty"`
	MurType            *GetLegalSearchDefaultApplicationJSONMursMurTypeEnum      `json:"mur_type,omitempty"`
	Name               *string                                                   `json:"name,omitempty"`
	No                 *string                                                   `json:"no,omitempty"`
	OpenDate           *time.Time                                                `json:"open_date,omitempty"`
	Participants       []GetLegalSearchDefaultApplicationJSONMursParticipants    `json:"participants,omitempty"`
	Respondents        []string                                                  `json:"respondents,omitempty"`
	Subjects           []string                                                  `json:"subjects,omitempty"`
	URL                *string                                                   `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONRegulations struct {
	DocID              *string                `json:"doc_id,omitempty"`
	DocumentHighlights map[string]interface{} `json:"document_highlights,omitempty"`
	Highlights         []string               `json:"highlights,omitempty"`
	Name               *string                `json:"name,omitempty"`
	No                 *string                `json:"no,omitempty"`
	URL                *string                `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSONStatutes struct {
	Chapter            *string                `json:"chapter,omitempty"`
	DocID              *string                `json:"doc_id,omitempty"`
	DocumentHighlights map[string]interface{} `json:"document_highlights,omitempty"`
	Highlights         []string               `json:"highlights,omitempty"`
	Name               *string                `json:"name,omitempty"`
	No                 *string                `json:"no,omitempty"`
	Title              *string                `json:"title,omitempty"`
	URL                *string                `json:"url,omitempty"`
}

type GetLegalSearchDefaultApplicationJSON struct {
	AdminFines            []GetLegalSearchDefaultApplicationJSONAdminFines       `json:"admin_fines,omitempty"`
	Adrs                  []GetLegalSearchDefaultApplicationJSONAdrs             `json:"adrs,omitempty"`
	AdvisoryOpinions      []GetLegalSearchDefaultApplicationJSONAdvisoryOpinions `json:"advisory_opinions,omitempty"`
	Murs                  []GetLegalSearchDefaultApplicationJSONMurs             `json:"murs,omitempty"`
	Regulations           []GetLegalSearchDefaultApplicationJSONRegulations      `json:"regulations,omitempty"`
	Statutes              []GetLegalSearchDefaultApplicationJSONStatutes         `json:"statutes,omitempty"`
	TotalAdminFines       *int64                                                 `json:"total_admin_fines,omitempty"`
	TotalAdrs             *int64                                                 `json:"total_adrs,omitempty"`
	TotalAdvisoryOpinions *int64                                                 `json:"total_advisory_opinions,omitempty"`
	TotalAll              *int64                                                 `json:"total_all,omitempty"`
	TotalMurs             *int64                                                 `json:"total_murs,omitempty"`
	TotalRegulations      *int64                                                 `json:"total_regulations,omitempty"`
	TotalStatutes         *int64                                                 `json:"total_statutes,omitempty"`
}

type GetLegalSearchRequest struct {
	QueryParams GetLegalSearchQueryParams
}

type GetLegalSearchResponse struct {
	ContentType                                string
	GetLegalSearchDefaultApplicationJSONObject *GetLegalSearchDefaultApplicationJSON
	StatusCode                                 int64
}
