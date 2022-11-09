import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChangeOrderStatusApiModelStatusEnum {
    PendingPayment = "PendingPayment"
,    Processing = "Processing"
,    Shipped = "Shipped"
,    Completed = "Completed"
,    OnHold = "OnHold"
,    Cancelled = "Cancelled"
,    Refunded = "Refunded"
,    Failed = "Failed"
}


export class ChangeOrderStatusApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Reason, form, name=Reason;" })
  reason?: string;

  @Metadata({ data: "json, name=Status, form, name=Status;" })
  status?: ChangeOrderStatusApiModelStatusEnum;
}
