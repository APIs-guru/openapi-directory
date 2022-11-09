import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommitteeHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=affiliated_committee_name" })
  affiliatedCommitteeName?: string;

  @Metadata({ data: "json, name=candidate_ids" })
  candidateIds?: string[];

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @Metadata({ data: "json, name=convert_to_pac_flag" })
  convertToPacFlag?: boolean;

  @Metadata({ data: "json, name=cycle" })
  cycle: number;

  @Metadata({ data: "json, name=cycles" })
  cycles?: number[];

  @Metadata({ data: "json, name=cycles_has_activity" })
  cyclesHasActivity?: number[];

  @Metadata({ data: "json, name=cycles_has_financial" })
  cyclesHasFinancial?: number[];

  @Metadata({ data: "json, name=designation" })
  designation?: string;

  @Metadata({ data: "json, name=designation_full" })
  designationFull?: string;

  @Metadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @Metadata({ data: "json, name=former_candidate_election_year" })
  formerCandidateElectionYear?: number;

  @Metadata({ data: "json, name=former_candidate_id" })
  formerCandidateId?: string;

  @Metadata({ data: "json, name=former_candidate_name" })
  formerCandidateName?: string;

  @Metadata({ data: "json, name=former_committee_name" })
  formerCommitteeName?: string;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=last_cycle_has_activity" })
  lastCycleHasActivity?: number;

  @Metadata({ data: "json, name=last_cycle_has_financial" })
  lastCycleHasFinancial?: number;

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

  @Metadata({ data: "json, name=sponsor_candidate_ids" })
  sponsorCandidateIds?: string[];

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=state_full" })
  stateFull?: string;

  @Metadata({ data: "json, name=street_1" })
  street1?: string;

  @Metadata({ data: "json, name=street_2" })
  street2?: string;

  @Metadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
