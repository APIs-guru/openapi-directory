import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdSizeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Pixel = "PIXEL",
    Interstitial = "INTERSTITIAL",
    Native = "NATIVE",
    Fluid = "FLUID"
}
/**
 * Represents size of a single ad slot, or a creative.
**/
export declare class AdSize extends SpeakeasyBase {
    height?: string;
    type?: AdSizeTypeEnum;
    width?: string;
}
