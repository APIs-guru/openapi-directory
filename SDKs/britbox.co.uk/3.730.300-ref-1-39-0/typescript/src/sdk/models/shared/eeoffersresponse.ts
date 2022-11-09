import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EeOfferItem } from "./eeofferitem";


export class EeOffersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eligibleOffers", elemType: shared.EeOfferItem })
  eligibleOffers: EeOfferItem[];
}
