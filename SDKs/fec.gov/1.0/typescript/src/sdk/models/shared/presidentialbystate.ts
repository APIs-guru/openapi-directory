import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PresidentialByState extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @Metadata({ data: "json, name=contribution_state" })
  contributionState?: string;

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;
}
