import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvEntitlementCancelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelled_at" })
  cancelledAt: Date;

  @SpeakeasyMetadata({ data: "json, name=itvId" })
  itvId: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;
}
