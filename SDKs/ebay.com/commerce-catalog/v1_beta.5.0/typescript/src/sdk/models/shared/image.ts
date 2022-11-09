import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Image
/** 
 * This type contains information about a product image stored in eBay Picture Services (EPS).
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
