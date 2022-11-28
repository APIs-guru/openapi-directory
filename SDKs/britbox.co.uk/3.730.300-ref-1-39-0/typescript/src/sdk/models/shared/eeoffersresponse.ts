import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EeOfferItem } from "./eeofferitem";



export class EeOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eligibleOffers", elemType: EeOfferItem })
  eligibleOffers: EeOfferItem[];
}
