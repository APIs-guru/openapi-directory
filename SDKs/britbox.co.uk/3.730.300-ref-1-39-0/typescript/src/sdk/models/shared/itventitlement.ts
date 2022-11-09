import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvEntitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=card_type" })
  cardType?: Date;

  @Metadata({ data: "json, name=expiry" })
  expiry: Date;

  @Metadata({ data: "json, name=plan" })
  plan: Map<string, any>;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;
}
