import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PageMetadata
/** 
 * Metadata associated with a page. Primarily intended for SEO usage.
**/
export class PageMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments?: string[];
}
