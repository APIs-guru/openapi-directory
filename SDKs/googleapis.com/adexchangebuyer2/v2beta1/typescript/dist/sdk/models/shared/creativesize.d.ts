import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
export declare enum CreativeSizeAllowedFormatsEnum {
    Unknown = "UNKNOWN",
    Audio = "AUDIO"
}
export declare enum CreativeSizeCreativeSizeTypeEnum {
    CreativeSizeTypeUnspecified = "CREATIVE_SIZE_TYPE_UNSPECIFIED",
    Regular = "REGULAR",
    Interstitial = "INTERSTITIAL",
    Video = "VIDEO",
    Native = "NATIVE"
}
export declare enum CreativeSizeNativeTemplateEnum {
    UnknownNativeTemplate = "UNKNOWN_NATIVE_TEMPLATE",
    NativeContentAd = "NATIVE_CONTENT_AD",
    NativeAppInstallAd = "NATIVE_APP_INSTALL_AD",
    NativeVideoContentAd = "NATIVE_VIDEO_CONTENT_AD",
    NativeVideoAppInstallAd = "NATIVE_VIDEO_APP_INSTALL_AD"
}
export declare enum CreativeSizeSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Generic = "GENERIC",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE"
}
/**
 * Specifies the size of the creative.
**/
export declare class CreativeSize extends SpeakeasyBase {
    allowedFormats?: CreativeSizeAllowedFormatsEnum[];
    companionSizes?: Size[];
    creativeSizeType?: CreativeSizeCreativeSizeTypeEnum;
    nativeTemplate?: CreativeSizeNativeTemplateEnum;
    size?: Size;
    skippableAdType?: CreativeSizeSkippableAdTypeEnum;
}
