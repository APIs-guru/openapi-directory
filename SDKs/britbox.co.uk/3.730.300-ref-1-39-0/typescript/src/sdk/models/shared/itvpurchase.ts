import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvPurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=planId" })
  planId: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;
}
