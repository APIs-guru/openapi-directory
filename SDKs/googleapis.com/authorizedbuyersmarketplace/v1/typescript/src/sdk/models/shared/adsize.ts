import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdSizeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
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

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AdSizeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}
