import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvPurchaseStrongResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=intentId" })
  intentId?: string;

  @Metadata({ data: "json, name=intentType" })
  intentType?: string;

  @Metadata({ data: "json, name=planId" })
  planId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;
}
