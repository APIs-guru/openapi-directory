import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlanPurchaseTypeEnum {
    Free = "Free",
    Subscription = "Subscription"
}


export class PlanPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PlanPurchaseTypeEnum;
}
