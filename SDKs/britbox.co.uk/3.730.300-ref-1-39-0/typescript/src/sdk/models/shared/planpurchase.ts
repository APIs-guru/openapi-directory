import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlanPurchaseTypeEnum {
    Free = "Free"
,    Subscription = "Subscription"
}


export class PlanPurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: PlanPurchaseTypeEnum;
}
