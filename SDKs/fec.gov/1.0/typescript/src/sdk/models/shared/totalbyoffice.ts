import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TotalByOffice extends SpeakeasyBase {
  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;

  @Metadata({ data: "json, name=office" })
  office?: string;

  @Metadata({ data: "json, name=total_disbursements" })
  totalDisbursements?: number;

  @Metadata({ data: "json, name=total_receipts" })
  totalReceipts?: number;
}
