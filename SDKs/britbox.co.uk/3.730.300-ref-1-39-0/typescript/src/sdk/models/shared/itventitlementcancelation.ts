import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvEntitlementCancelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelled_at" })
  cancelledAt: Date;

  @Metadata({ data: "json, name=itvId" })
  itvId: string;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;
}
