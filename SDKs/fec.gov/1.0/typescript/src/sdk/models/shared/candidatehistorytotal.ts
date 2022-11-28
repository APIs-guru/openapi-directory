import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CandidateHistoryTotal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_through" })
  activeThrough?: number;

  @SpeakeasyMetadata({ data: "json, name=address_city" })
  addressCity?: string;

  @SpeakeasyMetadata({ data: "json, name=address_state" })
  addressState?: string;

  @SpeakeasyMetadata({ data: "json, name=address_street_1" })
  addressStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_street_2" })
  addressStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=address_zip" })
  addressZip?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_election_year" })
  candidateElectionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_inactive" })
  candidateInactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=candidate_status" })
  candidateStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "json, name=cycles" })
  cycles?: number[];

  @SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=disbursements" })
  disbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=district_number" })
  districtNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=election_districts" })
  electionDistricts?: string[];

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=election_years" })
  electionYears?: number[];

  @SpeakeasyMetadata({ data: "json, name=fec_cycles_in_election" })
  fecCyclesInElection?: number[];

  @SpeakeasyMetadata({ data: "json, name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: string;

  @SpeakeasyMetadata({ data: "json, name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=incumbent_challenge" })
  incumbentChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=incumbent_challenge_full" })
  incumbentChallengeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=is_election" })
  isElection: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=receipts" })
  receipts?: number;

  @SpeakeasyMetadata({ data: "json, name=rounded_election_years" })
  roundedElectionYears?: number[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=two_year_period" })
  twoYearPeriod: number;
}
