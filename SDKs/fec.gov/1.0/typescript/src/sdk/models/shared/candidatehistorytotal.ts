import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CandidateHistoryTotal extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_through" })
  activeThrough?: number;

  @Metadata({ data: "json, name=address_city" })
  addressCity?: string;

  @Metadata({ data: "json, name=address_state" })
  addressState?: string;

  @Metadata({ data: "json, name=address_street_1" })
  addressStreet1?: string;

  @Metadata({ data: "json, name=address_street_2" })
  addressStreet2?: string;

  @Metadata({ data: "json, name=address_zip" })
  addressZip?: string;

  @Metadata({ data: "json, name=candidate_election_year" })
  candidateElectionYear?: number;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId: string;

  @Metadata({ data: "json, name=candidate_inactive" })
  candidateInactive?: boolean;

  @Metadata({ data: "json, name=candidate_status" })
  candidateStatus?: string;

  @Metadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @Metadata({ data: "json, name=cycle" })
  cycle: number;

  @Metadata({ data: "json, name=cycles" })
  cycles?: number[];

  @Metadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @Metadata({ data: "json, name=disbursements" })
  disbursements?: number;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=district_number" })
  districtNumber?: number;

  @Metadata({ data: "json, name=election_districts" })
  electionDistricts?: string[];

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;

  @Metadata({ data: "json, name=election_years" })
  electionYears?: number[];

  @Metadata({ data: "json, name=fec_cycles_in_election" })
  fecCyclesInElection?: number[];

  @Metadata({ data: "json, name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @Metadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @Metadata({ data: "json, name=flags" })
  flags?: string;

  @Metadata({ data: "json, name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @Metadata({ data: "json, name=incumbent_challenge" })
  incumbentChallenge?: string;

  @Metadata({ data: "json, name=incumbent_challenge_full" })
  incumbentChallengeFull?: string;

  @Metadata({ data: "json, name=is_election" })
  isElection: boolean;

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

  @Metadata({ data: "json, name=receipts" })
  receipts?: number;

  @Metadata({ data: "json, name=rounded_election_years" })
  roundedElectionYears?: number[];

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=two_year_period" })
  twoYearPeriod: number;
}
