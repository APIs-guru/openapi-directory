import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PresidentialByState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=contribution_state" })
  contributionState?: string;

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;
}
