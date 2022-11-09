import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MetaTagSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=description_category_page" })
  descriptionCategoryPage?: string;

  @Metadata({ data: "json, name=description_collection_page" })
  descriptionCollectionPage?: string;

  @Metadata({ data: "json, name=description_listing_page" })
  descriptionListingPage?: string;

  @Metadata({ data: "json, name=keywords" })
  keywords?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=title_postfix" })
  titlePostfix?: string;
}
