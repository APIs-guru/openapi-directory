import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdSizeSizeTypeEnum {
    SizeTypeUnspecified = "SIZE_TYPE_UNSPECIFIED"
,    Pixel = "PIXEL"
,    Interstitial = "INTERSTITIAL"
,    Native = "NATIVE"
,    Fluid = "FLUID"
}


// AdSize
/** 
 * Represents size of a single ad slot, or a creative.
**/
export class AdSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=sizeType" })
  sizeType?: AdSizeSizeTypeEnum;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
