package shared

import (
"time")

type CommitteeDetail struct {
    AffiliatedCommitteeName *string `json:"affiliated_committee_name,omitempty"`
    CandidateIds []string `json:"candidate_ids,omitempty"`
    City *string `json:"city,omitempty"`
    CommitteeID string `json:"committee_id"`
    CommitteeType *string `json:"committee_type,omitempty"`
    CommitteeTypeFull *string `json:"committee_type_full,omitempty"`
    CustodianCity *string `json:"custodian_city,omitempty"`
    CustodianName1 *string `json:"custodian_name_1,omitempty"`
    CustodianName2 *string `json:"custodian_name_2,omitempty"`
    CustodianNameFull *string `json:"custodian_name_full,omitempty"`
    CustodianNameMiddle *string `json:"custodian_name_middle,omitempty"`
    CustodianNamePrefix *string `json:"custodian_name_prefix,omitempty"`
    CustodianNameSuffix *string `json:"custodian_name_suffix,omitempty"`
    CustodianNameTitle *string `json:"custodian_name_title,omitempty"`
    CustodianPhone *string `json:"custodian_phone,omitempty"`
    CustodianState *string `json:"custodian_state,omitempty"`
    CustodianStreet1 *string `json:"custodian_street_1,omitempty"`
    CustodianStreet2 *string `json:"custodian_street_2,omitempty"`
    CustodianZip *string `json:"custodian_zip,omitempty"`
    Cycles []int32 `json:"cycles,omitempty"`
    Designation *string `json:"designation,omitempty"`
    DesignationFull *string `json:"designation_full,omitempty"`
    Email *string `json:"email,omitempty"`
    Fax *string `json:"fax,omitempty"`
    FilingFrequency *string `json:"filing_frequency,omitempty"`
    FirstFileDate *time.Time `json:"first_file_date,omitempty"`
    FormType *string `json:"form_type,omitempty"`
    LastFileDate *time.Time `json:"last_file_date,omitempty"`
    LeadershipPac *string `json:"leadership_pac,omitempty"`
    LobbyistRegistrantPac *string `json:"lobbyist_registrant_pac,omitempty"`
    Name *string `json:"name,omitempty"`
    OrganizationType *string `json:"organization_type,omitempty"`
    OrganizationTypeFull *string `json:"organization_type_full,omitempty"`
    Party *string `json:"party,omitempty"`
    PartyFull *string `json:"party_full,omitempty"`
    PartyType *string `json:"party_type,omitempty"`
    PartyTypeFull *string `json:"party_type_full,omitempty"`
    SponsorCandidateIds []string `json:"sponsor_candidate_ids,omitempty"`
    State *string `json:"state,omitempty"`
    StateFull *string `json:"state_full,omitempty"`
    Street1 *string `json:"street_1,omitempty"`
    Street2 *string `json:"street_2,omitempty"`
    TreasurerCity *string `json:"treasurer_city,omitempty"`
    TreasurerName *string `json:"treasurer_name,omitempty"`
    TreasurerName1 *string `json:"treasurer_name_1,omitempty"`
    TreasurerName2 *string `json:"treasurer_name_2,omitempty"`
    TreasurerNameMiddle *string `json:"treasurer_name_middle,omitempty"`
    TreasurerNamePrefix *string `json:"treasurer_name_prefix,omitempty"`
    TreasurerNameSuffix *string `json:"treasurer_name_suffix,omitempty"`
    TreasurerNameTitle *string `json:"treasurer_name_title,omitempty"`
    TreasurerPhone *string `json:"treasurer_phone,omitempty"`
    TreasurerState *string `json:"treasurer_state,omitempty"`
    TreasurerStreet1 *string `json:"treasurer_street_1,omitempty"`
    TreasurerStreet2 *string `json:"treasurer_street_2,omitempty"`
    TreasurerZip *string `json:"treasurer_zip,omitempty"`
    Website *string `json:"website,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

