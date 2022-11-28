import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aspect } from "./aspect";



// Product
/** 
 * The type that defines the fields for the aspects of a product.
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspects", elemType: Aspect })
  aspects?: Aspect[];

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=epid" })
  epid?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrls" })
  imageUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
