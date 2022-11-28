import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChangeOrderStatusApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}


export class ChangeOrderStatusApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Reason, form, name=Reason;" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" })
  status?: ChangeOrderStatusApiModelStatusEnum;
}
