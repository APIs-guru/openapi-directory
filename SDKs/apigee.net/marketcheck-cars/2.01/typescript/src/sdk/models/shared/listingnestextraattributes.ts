import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListingNestExtraAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealer_added_f" })
  dealerAddedF?: string[];

  @SpeakeasyMetadata({ data: "json, name=electronics_f" })
  electronicsF?: string[];

  @SpeakeasyMetadata({ data: "json, name=exterior_f" })
  exteriorF?: string[];

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=interior_f" })
  interiorF?: string[];

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=safety_f" })
  safetyF?: string[];

  @SpeakeasyMetadata({ data: "json, name=seller_comments" })
  sellerComments?: string;

  @SpeakeasyMetadata({ data: "json, name=standard_f" })
  standardF?: string[];

  @SpeakeasyMetadata({ data: "json, name=technical_f" })
  technicalF?: string[];
}
