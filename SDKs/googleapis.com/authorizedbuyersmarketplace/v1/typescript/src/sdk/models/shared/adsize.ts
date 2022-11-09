import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdSizeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
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

  @Metadata({ data: "json, name=type" })
  type?: AdSizeTypeEnum;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
