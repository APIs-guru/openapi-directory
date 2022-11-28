import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommitteeHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affiliated_committee_name" })
  affiliatedCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_ids" })
  candidateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=convert_to_pac_flag" })
  convertToPacFlag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "json, name=cycles" })
  cycles?: number[];

  @SpeakeasyMetadata({ data: "json, name=cycles_has_activity" })
  cyclesHasActivity?: number[];

  @SpeakeasyMetadata({ data: "json, name=cycles_has_financial" })
  cyclesHasFinancial?: number[];

  @SpeakeasyMetadata({ data: "json, name=designation" })
  designation?: string;

  @SpeakeasyMetadata({ data: "json, name=designation_full" })
  designationFull?: string;

  @SpeakeasyMetadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=former_candidate_election_year" })
  formerCandidateElectionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=former_candidate_id" })
  formerCandidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=former_candidate_name" })
  formerCandidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=former_committee_name" })
  formerCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_cycle_has_activity" })
  lastCycleHasActivity?: number;

  @SpeakeasyMetadata({ data: "json, name=last_cycle_has_financial" })
  lastCycleHasFinancial?: number;

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

  @SpeakeasyMetadata({ data: "json, name=sponsor_candidate_ids" })
  sponsorCandidateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=state_full" })
  stateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=street_1" })
  street1?: string;

  @SpeakeasyMetadata({ data: "json, name=street_2" })
  street2?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
