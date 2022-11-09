import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PresidentialBySize extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=size_range_id" })
  sizeRangeId?: number;
}
