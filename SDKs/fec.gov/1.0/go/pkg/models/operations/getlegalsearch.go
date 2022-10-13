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

type GetLegalSearchRequest struct {
	QueryParams GetLegalSearchQueryParams
}

type GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes struct {
	Action   *string    `json:"action"`
	VoteDate *time.Time `json:"vote_date"`
}

type GetLegalSearchDefaultApplicationJSONAdminFinesDocuments struct {
	Category     *string    `json:"category"`
	Description  *string    `json:"description"`
	DocumentDate *time.Time `json:"document_date"`
	DocumentID   *int64     `json:"document_id"`
	Length       *int64     `json:"length"`
	URL          *string    `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONAdminFines struct {
	ChallengeOutcome          *string                                                         `json:"challenge_outcome"`
	ChallengeReceiptDate      *time.Time                                                      `json:"challenge_receipt_date"`
	CheckAmount               *float64                                                        `json:"check_amount"`
	CommissionVotes           []GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes `json:"commission_votes"`
	CommitteeID               *string                                                         `json:"committee_id"`
	DocID                     *string                                                         `json:"doc_id"`
	DocumentHighlights        map[string]interface{}                                          `json:"document_highlights"`
	Documents                 []GetLegalSearchDefaultApplicationJSONAdminFinesDocuments       `json:"documents"`
	FinalDeterminationAmount  *float64                                                        `json:"final_determination_amount"`
	FinalDeterminationDate    *time.Time                                                      `json:"final_determination_date"`
	Highlights                []string                                                        `json:"highlights"`
	Name                      *string                                                         `json:"name"`
	No                        *string                                                         `json:"no"`
	PetitionCourtDecisionDate *time.Time                                                      `json:"petition_court_decision_date"`
	PetitionCourtFilingDate   *time.Time                                                      `json:"petition_court_filing_date"`
	ReasonToBelieveActionDate *time.Time                                                      `json:"reason_to_believe_action_date"`
	ReasonToBelieveFineAmount *float64                                                        `json:"reason_to_believe_fine_amount"`
	ReportType                *string                                                         `json:"report_type"`
	ReportYear                *string                                                         `json:"report_year"`
	TreasuryReferralAmount    *float64                                                        `json:"treasury_referral_amount"`
	TreasuryReferralDate      *time.Time                                                      `json:"treasury_referral_date"`
	URL                       *string                                                         `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes struct {
	Action   *string    `json:"action"`
	VoteDate *time.Time `json:"vote_date"`
}

type GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations struct {
	Text  *string `json:"text"`
	Title *string `json:"title"`
	Type  *string `json:"type"`
	URL   *string `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONAdrsDispositions struct {
	Citations   []GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations `json:"citations"`
	Disposition *string                                                         `json:"disposition"`
	Penalty     *float64                                                        `json:"penalty"`
	Respondent  *string                                                         `json:"respondent"`
}

type GetLegalSearchDefaultApplicationJSONAdrsDocuments struct {
	Category     *string    `json:"category"`
	Description  *string    `json:"description"`
	DocumentDate *time.Time `json:"document_date"`
	DocumentID   *int64     `json:"document_id"`
	Length       *int64     `json:"length"`
	URL          *string    `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONAdrsParticipants struct {
	Citations map[string]interface{} `json:"citations"`
	Name      *string                `json:"name"`
	Role      *string                `json:"role"`
}

type GetLegalSearchDefaultApplicationJSONAdrs struct {
	CloseDate          *time.Time                                                `json:"close_date"`
	CommissionVotes    []GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes `json:"commission_votes"`
	Dispositions       []GetLegalSearchDefaultApplicationJSONAdrsDispositions    `json:"dispositions"`
	DocID              *string                                                   `json:"doc_id"`
	DocumentHighlights map[string]interface{}                                    `json:"document_highlights"`
	Documents          []GetLegalSearchDefaultApplicationJSONAdrsDocuments       `json:"documents"`
	ElectionCycles     *int64                                                    `json:"election_cycles"`
	Highlights         []string                                                  `json:"highlights"`
	Name               *string                                                   `json:"name"`
	No                 *string                                                   `json:"no"`
	OpenDate           *time.Time                                                `json:"open_date"`
	Participants       []GetLegalSearchDefaultApplicationJSONAdrsParticipants    `json:"participants"`
	Respondents        []string                                                  `json:"respondents"`
	Subjects           []string                                                  `json:"subjects"`
	URL                *string                                                   `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations struct {
	Name *string `json:"name"`
	No   *string `json:"no"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy struct {
	Name *string `json:"name"`
	No   *string `json:"no"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments struct {
	Category    *string    `json:"category"`
	Date        *time.Time `json:"date"`
	Description *string    `json:"description"`
	DocumentID  *int64     `json:"document_id"`
	URL         *string    `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities struct {
	Name *string `json:"name"`
	Role *string `json:"role"`
	Type *string `json:"type"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations struct {
	Part    *int64 `json:"part"`
	Section *int64 `json:"section"`
	Title   *int64 `json:"title"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations struct {
	Section *string `json:"section"`
	Title   *int64  `json:"title"`
}

type GetLegalSearchDefaultApplicationJSONAdvisoryOpinions struct {
	AoCitations         []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations         `json:"ao_citations"`
	AosCitedBy          []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy          `json:"aos_cited_by"`
	CommenterNames      []string                                                                  `json:"commenter_names"`
	DocumentHighlights  map[string]interface{}                                                    `json:"document_highlights"`
	Documents           []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments           `json:"documents"`
	Entities            []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities            `json:"entities"`
	Highlights          []string                                                                  `json:"highlights"`
	IsPending           *bool                                                                     `json:"is_pending"`
	IssueDate           *time.Time                                                                `json:"issue_date"`
	Name                *string                                                                   `json:"name"`
	No                  *string                                                                   `json:"no"`
	RegulatoryCitations []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations `json:"regulatory_citations"`
	RepresentativeNames []string                                                                  `json:"representative_names"`
	RequestDate         *time.Time                                                                `json:"request_date"`
	RequestorNames      []string                                                                  `json:"requestor_names"`
	RequestorTypes      []string                                                                  `json:"requestor_types"`
	Status              *string                                                                   `json:"status"`
	StatutoryCitations  []GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations  `json:"statutory_citations"`
	Summary             *string                                                                   `json:"summary"`
}

type GetLegalSearchDefaultApplicationJSONMursCommissionVotes struct {
	Action   *string    `json:"action"`
	VoteDate *time.Time `json:"vote_date"`
}

type GetLegalSearchDefaultApplicationJSONMursDispositionsCitations struct {
	Text  *string `json:"text"`
	Title *string `json:"title"`
	Type  *string `json:"type"`
	URL   *string `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONMursDispositions struct {
	Citations   []GetLegalSearchDefaultApplicationJSONMursDispositionsCitations `json:"citations"`
	Disposition *string                                                         `json:"disposition"`
	Penalty     *float64                                                        `json:"penalty"`
	Respondent  *string                                                         `json:"respondent"`
}

type GetLegalSearchDefaultApplicationJSONMursDocuments struct {
	Category     *string    `json:"category"`
	Description  *string    `json:"description"`
	DocumentDate *time.Time `json:"document_date"`
	DocumentID   *int64     `json:"document_id"`
	Length       *int64     `json:"length"`
	URL          *string    `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONMursMurTypeEnum string

const (
	GetLegalSearchDefaultApplicationJSONMursMurTypeEnumCurrent  GetLegalSearchDefaultApplicationJSONMursMurTypeEnum = "current"
	GetLegalSearchDefaultApplicationJSONMursMurTypeEnumArchived GetLegalSearchDefaultApplicationJSONMursMurTypeEnum = "archived"
)

type GetLegalSearchDefaultApplicationJSONMursParticipants struct {
	Citations map[string]interface{} `json:"citations"`
	Name      *string                `json:"name"`
	Role      *string                `json:"role"`
}

type GetLegalSearchDefaultApplicationJSONMurs struct {
	CloseDate          *time.Time                                                `json:"close_date"`
	CommissionVotes    []GetLegalSearchDefaultApplicationJSONMursCommissionVotes `json:"commission_votes"`
	Dispositions       []GetLegalSearchDefaultApplicationJSONMursDispositions    `json:"dispositions"`
	DocID              *string                                                   `json:"doc_id"`
	DocumentHighlights map[string]interface{}                                    `json:"document_highlights"`
	Documents          []GetLegalSearchDefaultApplicationJSONMursDocuments       `json:"documents"`
	ElectionCycles     *int64                                                    `json:"election_cycles"`
	Highlights         []string                                                  `json:"highlights"`
	MurType            *GetLegalSearchDefaultApplicationJSONMursMurTypeEnum      `json:"mur_type"`
	Name               *string                                                   `json:"name"`
	No                 *string                                                   `json:"no"`
	OpenDate           *time.Time                                                `json:"open_date"`
	Participants       []GetLegalSearchDefaultApplicationJSONMursParticipants    `json:"participants"`
	Respondents        []string                                                  `json:"respondents"`
	Subjects           []string                                                  `json:"subjects"`
	URL                *string                                                   `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONRegulations struct {
	DocID              *string                `json:"doc_id"`
	DocumentHighlights map[string]interface{} `json:"document_highlights"`
	Highlights         []string               `json:"highlights"`
	Name               *string                `json:"name"`
	No                 *string                `json:"no"`
	URL                *string                `json:"url"`
}

type GetLegalSearchDefaultApplicationJSONStatutes struct {
	Chapter            *string                `json:"chapter"`
	DocID              *string                `json:"doc_id"`
	DocumentHighlights map[string]interface{} `json:"document_highlights"`
	Highlights         []string               `json:"highlights"`
	Name               *string                `json:"name"`
	No                 *string                `json:"no"`
	Title              *string                `json:"title"`
	URL                *string                `json:"url"`
}

type GetLegalSearchDefaultApplicationJSON struct {
	AdminFines            []GetLegalSearchDefaultApplicationJSONAdminFines       `json:"admin_fines"`
	Adrs                  []GetLegalSearchDefaultApplicationJSONAdrs             `json:"adrs"`
	AdvisoryOpinions      []GetLegalSearchDefaultApplicationJSONAdvisoryOpinions `json:"advisory_opinions"`
	Murs                  []GetLegalSearchDefaultApplicationJSONMurs             `json:"murs"`
	Regulations           []GetLegalSearchDefaultApplicationJSONRegulations      `json:"regulations"`
	Statutes              []GetLegalSearchDefaultApplicationJSONStatutes         `json:"statutes"`
	TotalAdminFines       *int64                                                 `json:"total_admin_fines"`
	TotalAdrs             *int64                                                 `json:"total_adrs"`
	TotalAdvisoryOpinions *int64                                                 `json:"total_advisory_opinions"`
	TotalAll              *int64                                                 `json:"total_all"`
	TotalMurs             *int64                                                 `json:"total_murs"`
	TotalRegulations      *int64                                                 `json:"total_regulations"`
	TotalStatutes         *int64                                                 `json:"total_statutes"`
}

type GetLegalSearchResponse struct {
	ContentType                                string
	GetLegalSearchDefaultApplicationJSONObject *GetLegalSearchDefaultApplicationJSON
	StatusCode                                 int64
}
