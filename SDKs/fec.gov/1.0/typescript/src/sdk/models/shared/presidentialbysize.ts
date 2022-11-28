import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PresidentialBySize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=size_range_id" })
  sizeRangeId?: number;
}
