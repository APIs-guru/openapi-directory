import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommitteeSponsorCandidateList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sponsor_candidate_id" })
  sponsorCandidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=sponsor_candidate_name" })
  sponsorCandidateName?: string;
}


export class Committee extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=sponsor_candidate_ids" })
  sponsorCandidateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=sponsor_candidate_list", elemType: CommitteeSponsorCandidateList })
  sponsorCandidateList?: CommitteeSponsorCandidateList[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;
}
