package shared

import (
	"time"
)

type CommitteeDetail struct {
	AffiliatedCommitteeName *string    `json:"affiliated_committee_name"`
	CandidateIds            []string   `json:"candidate_ids"`
	City                    *string    `json:"city"`
	CommitteeID             string     `json:"committee_id"`
	CommitteeType           *string    `json:"committee_type"`
	CommitteeTypeFull       *string    `json:"committee_type_full"`
	CustodianCity           *string    `json:"custodian_city"`
	CustodianName1          *string    `json:"custodian_name_1"`
	CustodianName2          *string    `json:"custodian_name_2"`
	CustodianNameFull       *string    `json:"custodian_name_full"`
	CustodianNameMiddle     *string    `json:"custodian_name_middle"`
	CustodianNamePrefix     *string    `json:"custodian_name_prefix"`
	CustodianNameSuffix     *string    `json:"custodian_name_suffix"`
	CustodianNameTitle      *string    `json:"custodian_name_title"`
	CustodianPhone          *string    `json:"custodian_phone"`
	CustodianState          *string    `json:"custodian_state"`
	CustodianStreet1        *string    `json:"custodian_street_1"`
	CustodianStreet2        *string    `json:"custodian_street_2"`
	CustodianZip            *string    `json:"custodian_zip"`
	Cycles                  []int32    `json:"cycles"`
	Designation             *string    `json:"designation"`
	DesignationFull         *string    `json:"designation_full"`
	Email                   *string    `json:"email"`
	Fax                     *string    `json:"fax"`
	FilingFrequency         *string    `json:"filing_frequency"`
	FirstFileDate           *time.Time `json:"first_file_date"`
	FormType                *string    `json:"form_type"`
	LastFileDate            *time.Time `json:"last_file_date"`
	LeadershipPac           *string    `json:"leadership_pac"`
	LobbyistRegistrantPac   *string    `json:"lobbyist_registrant_pac"`
	Name                    *string    `json:"name"`
	OrganizationType        *string    `json:"organization_type"`
	OrganizationTypeFull    *string    `json:"organization_type_full"`
	Party                   *string    `json:"party"`
	PartyFull               *string    `json:"party_full"`
	PartyType               *string    `json:"party_type"`
	PartyTypeFull           *string    `json:"party_type_full"`
	SponsorCandidateIds     []string   `json:"sponsor_candidate_ids"`
	State                   *string    `json:"state"`
	StateFull               *string    `json:"state_full"`
	Street1                 *string    `json:"street_1"`
	Street2                 *string    `json:"street_2"`
	TreasurerCity           *string    `json:"treasurer_city"`
	TreasurerName           *string    `json:"treasurer_name"`
	TreasurerName1          *string    `json:"treasurer_name_1"`
	TreasurerName2          *string    `json:"treasurer_name_2"`
	TreasurerNameMiddle     *string    `json:"treasurer_name_middle"`
	TreasurerNamePrefix     *string    `json:"treasurer_name_prefix"`
	TreasurerNameSuffix     *string    `json:"treasurer_name_suffix"`
	TreasurerNameTitle      *string    `json:"treasurer_name_title"`
	TreasurerPhone          *string    `json:"treasurer_phone"`
	TreasurerState          *string    `json:"treasurer_state"`
	TreasurerStreet1        *string    `json:"treasurer_street_1"`
	TreasurerStreet2        *string    `json:"treasurer_street_2"`
	TreasurerZip            *string    `json:"treasurer_zip"`
	Website                 *string    `json:"website"`
	Zip                     *string    `json:"zip"`
}
