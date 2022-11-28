import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvPurchaseStrongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=intentId" })
  intentId?: string;

  @SpeakeasyMetadata({ data: "json, name=intentType" })
  intentType?: string;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;
}
