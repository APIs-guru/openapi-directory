import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Logo } from "./logo";
import { Translation } from "./translation";



export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=listing_description_text_template" })
  listingDescriptionTextTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=listing_features_text_template" })
  listingFeaturesTextTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=listing_pricing_text_template" })
  listingPricingTextTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: Logo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation })
  translations?: Translation[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
