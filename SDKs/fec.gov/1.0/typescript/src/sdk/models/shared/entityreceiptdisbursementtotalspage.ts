import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { EntityReceiptDisbursementTotals } from "./entityreceiptdisbursementtotals";



export class EntityReceiptDisbursementTotalsPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: EntityReceiptDisbursementTotals })
  results?: EntityReceiptDisbursementTotals[];
}
