import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TotalByOfficeByParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=total_disbursements" })
  totalDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=total_receipts" })
  totalReceipts?: number;
}
