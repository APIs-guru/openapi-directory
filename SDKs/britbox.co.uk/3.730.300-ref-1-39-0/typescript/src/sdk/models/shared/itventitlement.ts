import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvEntitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card_type" })
  cardType?: Date;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry: Date;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;
}
