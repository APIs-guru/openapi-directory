import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvSubscriptionFullPriceRenewal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullPriceRenewal" })
  fullPriceRenewal: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;
}
