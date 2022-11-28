import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Image
/** 
 * This type contains information about a product image stored in eBay Picture Services (EPS).
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
