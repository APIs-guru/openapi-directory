import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListingExtraAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealer_added_f" })
  dealerAddedF?: string[];

  @Metadata({ data: "json, name=electronics_f" })
  electronicsF?: string[];

  @Metadata({ data: "json, name=exterior_f" })
  exteriorF?: string[];

  @Metadata({ data: "json, name=features" })
  features?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=interior_f" })
  interiorF?: string[];

  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=safety_f" })
  safetyF?: string[];

  @Metadata({ data: "json, name=seller_cmts" })
  sellerCmts?: string;

  @Metadata({ data: "json, name=standard_f" })
  standardF?: string[];

  @Metadata({ data: "json, name=technical_f" })
  technicalF?: string[];
}
