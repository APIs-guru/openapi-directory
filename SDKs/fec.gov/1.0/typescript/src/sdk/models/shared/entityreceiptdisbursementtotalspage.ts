import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { EntityReceiptDisbursementTotals } from "./entityreceiptdisbursementtotals";


export class EntityReceiptDisbursementTotalsPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.EntityReceiptDisbursementTotals })
  results?: EntityReceiptDisbursementTotals[];
}
