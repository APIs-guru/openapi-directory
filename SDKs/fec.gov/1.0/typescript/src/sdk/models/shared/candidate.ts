import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CandidatePrincipalCommittees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affiliated_committee_name" })
  affiliatedCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_ids" })
  candidateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=cycles" })
  cycles?: number[];

  @SpeakeasyMetadata({ data: "json, name=designation" })
  designation?: string;

  @SpeakeasyMetadata({ data: "json, name=designation_full" })
  designationFull?: string;

  @SpeakeasyMetadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_f1_date" })
  lastF1Date?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_file_date" })
  lastFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_type" })
  organizationType?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_type_full" })
  organizationTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=party_full" })
  partyFull?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;
}


export class Candidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_through" })
  activeThrough?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_inactive" })
  candidateInactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=candidate_status" })
  candidateStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=cycles" })
  cycles?: number[];

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=district_number" })
  districtNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=election_districts" })
  electionDistricts?: string[];

  @SpeakeasyMetadata({ data: "json, name=election_years" })
  electionYears?: number[];

  @SpeakeasyMetadata({ data: "json, name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inactive_election_years" })
  inactiveElectionYears?: number[];

  @SpeakeasyMetadata({ data: "json, name=incumbent_challenge" })
  incumbentChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=incumbent_challenge_full" })
  incumbentChallengeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=last_f2_date" })
  lastF2Date?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_file_date" })
  lastFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=load_date" })
  loadDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office?: string;

  @SpeakeasyMetadata({ data: "json, name=office_full" })
  officeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=party_full" })
  partyFull?: string;

  @SpeakeasyMetadata({ data: "json, name=principal_committees", elemType: CandidatePrincipalCommittees })
  principalCommittees?: CandidatePrincipalCommittees[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
