import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetaTagSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=description_category_page" })
  descriptionCategoryPage?: string;

  @SpeakeasyMetadata({ data: "json, name=description_collection_page" })
  descriptionCollectionPage?: string;

  @SpeakeasyMetadata({ data: "json, name=description_listing_page" })
  descriptionListingPage?: string;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=title_postfix" })
  titlePostfix?: string;
}
