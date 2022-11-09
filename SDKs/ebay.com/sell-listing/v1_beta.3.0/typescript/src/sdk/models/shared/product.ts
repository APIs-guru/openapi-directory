import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Aspect } from "./aspect";


// Product
/** 
 * The type that defines the fields for the aspects of a product.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspects", elemType: shared.Aspect })
  aspects?: Aspect[];

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=epid" })
  epid?: string;

  @Metadata({ data: "json, name=imageUrls" })
  imageUrls?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
