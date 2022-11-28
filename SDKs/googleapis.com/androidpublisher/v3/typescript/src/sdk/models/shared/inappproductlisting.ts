import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InAppProductListing
/** 
 * Store listing of a single in-app product.
**/
export class InAppProductListing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benefits" })
  benefits?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
