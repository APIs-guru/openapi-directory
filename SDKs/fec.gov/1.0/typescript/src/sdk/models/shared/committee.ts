import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CommitteeSponsorCandidateList extends SpeakeasyBase {
  @Metadata({ data: "json, name=sponsor_candidate_id" })
  sponsorCandidateId?: string;

  @Metadata({ data: "json, name=sponsor_candidate_name" })
  sponsorCandidateName?: string;
}


export class Committee extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=sponsor_candidate_ids" })
  sponsorCandidateIds?: string[];

  @Metadata({ data: "json, name=sponsor_candidate_list", elemType: shared.CommitteeSponsorCandidateList })
  sponsorCandidateList?: CommitteeSponsorCandidateList[];

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;
}
