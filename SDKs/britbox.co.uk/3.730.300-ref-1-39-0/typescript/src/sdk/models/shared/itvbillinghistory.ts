import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItvBillingHistoryRecord } from "./itvbillinghistoryrecord";


export class ItvBillingHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=payment_history", elemType: shared.ItvBillingHistoryRecord })
  paymentHistory: ItvBillingHistoryRecord[];
}
