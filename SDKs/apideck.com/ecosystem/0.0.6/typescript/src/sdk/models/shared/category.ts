import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Logo } from "./logo";
import { Translation } from "./translation";


export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=listing_description_text_template" })
  listingDescriptionTextTemplate?: string;

  @Metadata({ data: "json, name=listing_features_text_template" })
  listingFeaturesTextTemplate?: string;

  @Metadata({ data: "json, name=listing_pricing_text_template" })
  listingPricingTextTemplate?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: Logo;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
