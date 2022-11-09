import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvSubscriptionFullPriceRenewal extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullPriceRenewal" })
  fullPriceRenewal: boolean;

  @Metadata({ data: "json, name=reason" })
  reason: string;
}
