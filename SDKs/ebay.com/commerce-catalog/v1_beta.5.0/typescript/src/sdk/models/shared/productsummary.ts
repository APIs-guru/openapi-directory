import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";
import { Aspect } from "./aspect";
import { Image } from "./image";


// ProductSummary
/** 
 * This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the getProduct URL for retrieving the product details.
**/
export class ProductSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImages", elemType: shared.Image })
  additionalImages?: Image[];

  @Metadata({ data: "json, name=aspects", elemType: shared.Aspect })
  aspects?: Aspect[];

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=ean" })
  ean?: string[];

  @Metadata({ data: "json, name=epid" })
  epid?: string;

  @Metadata({ data: "json, name=gtin" })
  gtin?: string[];

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=isbn" })
  isbn?: string[];

  @Metadata({ data: "json, name=mpn" })
  mpn?: string[];

  @Metadata({ data: "json, name=productHref" })
  productHref?: string;

  @Metadata({ data: "json, name=productWebUrl" })
  productWebUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=upc" })
  upc?: string[];
}
