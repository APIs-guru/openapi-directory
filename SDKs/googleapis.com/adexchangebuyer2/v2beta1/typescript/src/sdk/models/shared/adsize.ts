import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdSizeSizeTypeEnum {
    SizeTypeUnspecified = "SIZE_TYPE_UNSPECIFIED",
    Pixel = "PIXEL",
    Interstitial = "INTERSTITIAL",
    Native = "NATIVE",
    Fluid = "FLUID"
}


// AdSize
/** 
 * Represents size of a single ad slot, or a creative.
**/
export class AdSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeType" })
  sizeType?: AdSizeSizeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}
