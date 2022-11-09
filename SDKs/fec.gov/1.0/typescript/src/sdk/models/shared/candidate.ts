import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CandidatePrincipalCommittees extends SpeakeasyBase {
  @Metadata({ data: "json, name=affiliated_committee_name" })
  affiliatedCommitteeName?: string;

  @Metadata({ data: "json, name=candidate_ids" })
  candidateIds?: string[];

  @Metadata({ data: "json, name=committee_id" })
  committeeId: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @Metadata({ data: "json, name=cycles" })
  cycles?: number[];

  @Metadata({ data: "json, name=designation" })
  designation?: string;

  @Metadata({ data: "json, name=designation_full" })
  designationFull?: string;

  @Metadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @Metadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @Metadata({ data: "json, name=last_f1_date" })
  lastF1Date?: Date;

  @Metadata({ data: "json, name=last_file_date" })
  lastFileDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization_type" })
  organizationType?: string;

  @Metadata({ data: "json, name=organization_type_full" })
  organizationTypeFull?: string;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=party_full" })
  partyFull?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;
}


export class Candidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_through" })
  activeThrough?: number;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_inactive" })
  candidateInactive?: boolean;

  @Metadata({ data: "json, name=candidate_status" })
  candidateStatus?: string;

  @Metadata({ data: "json, name=cycles" })
  cycles?: number[];

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=district_number" })
  districtNumber?: number;

  @Metadata({ data: "json, name=election_districts" })
  electionDistricts?: string[];

  @Metadata({ data: "json, name=election_years" })
  electionYears?: number[];

  @Metadata({ data: "json, name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @Metadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @Metadata({ data: "json, name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @Metadata({ data: "json, name=inactive_election_years" })
  inactiveElectionYears?: number[];

  @Metadata({ data: "json, name=incumbent_challenge" })
  incumbentChallenge?: string;

  @Metadata({ data: "json, name=incumbent_challenge_full" })
  incumbentChallengeFull?: string;

  @Metadata({ data: "json, name=last_f2_date" })
  lastF2Date?: Date;

  @Metadata({ data: "json, name=last_file_date" })
  lastFileDate?: Date;

  @Metadata({ data: "json, name=load_date" })
  loadDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=office" })
  office?: string;

  @Metadata({ data: "json, name=office_full" })
  officeFull?: string;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=party_full" })
  partyFull?: string;

  @Metadata({ data: "json, name=principal_committees", elemType: shared.CandidatePrincipalCommittees })
  principalCommittees?: CandidatePrincipalCommittees[];

  @Metadata({ data: "json, name=state" })
  state?: string;
}
