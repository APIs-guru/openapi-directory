import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InAppProductListing
/** 
 * Store listing of a single in-app product.
**/
export class InAppProductListing extends SpeakeasyBase {
  @Metadata({ data: "json, name=benefits" })
  benefits?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
