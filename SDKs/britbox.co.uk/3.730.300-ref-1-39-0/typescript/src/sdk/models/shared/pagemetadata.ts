import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PageMetadata
/** 
 * Metadata associated with a page. Primarily intended for SEO usage.
**/
export class PageMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=keywords" })
  keywords?: string[];

  @Metadata({ data: "json, name=segments" })
  segments?: string[];
}
