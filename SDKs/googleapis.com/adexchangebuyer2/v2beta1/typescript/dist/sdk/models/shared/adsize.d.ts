import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdSizeSizeTypeEnum {
    SizeTypeUnspecified = "SIZE_TYPE_UNSPECIFIED",
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
    sizeType?: AdSizeSizeTypeEnum;
    width?: string;
}
