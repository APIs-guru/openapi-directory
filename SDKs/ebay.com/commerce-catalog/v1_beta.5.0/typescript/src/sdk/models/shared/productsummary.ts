import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Aspect } from "./aspect";



// ProductSummary
/** 
 * This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the getProduct URL for retrieving the product details.
**/
export class ProductSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalImages", elemType: Image })
  additionalImages?: Image[];

  @SpeakeasyMetadata({ data: "json, name=aspects", elemType: Aspect })
  aspects?: Aspect[];

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=ean" })
  ean?: string[];

  @SpeakeasyMetadata({ data: "json, name=epid" })
  epid?: string;

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=isbn" })
  isbn?: string[];

  @SpeakeasyMetadata({ data: "json, name=mpn" })
  mpn?: string[];

  @SpeakeasyMetadata({ data: "json, name=productHref" })
  productHref?: string;

  @SpeakeasyMetadata({ data: "json, name=productWebUrl" })
  productWebUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=upc" })
  upc?: string[];
}
