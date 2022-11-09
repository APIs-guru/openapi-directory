import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";
import { Aspect } from "./aspect";
import { Image } from "./image";


// Product
/** 
 * This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImages", elemType: shared.Image })
  additionalImages?: Image[];

  @Metadata({ data: "json, name=aspects", elemType: shared.Aspect })
  aspects?: Aspect[];

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

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

  @Metadata({ data: "json, name=otherApplicableCategoryIds" })
  otherApplicableCategoryIds?: string[];

  @Metadata({ data: "json, name=primaryCategoryId" })
  primaryCategoryId?: string;

  @Metadata({ data: "json, name=productWebUrl" })
  productWebUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=upc" })
  upc?: string[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
