import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItvBillingHistoryRecord } from "./itvbillinghistoryrecord";



export class ItvBillingHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payment_history", elemType: ItvBillingHistoryRecord })
  paymentHistory: ItvBillingHistoryRecord[];
}
