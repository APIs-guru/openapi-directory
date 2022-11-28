import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";


export enum CreativeSizeAllowedFormatsEnum {
    Unknown = "UNKNOWN",
    Audio = "AUDIO"
}

export enum CreativeSizeCreativeSizeTypeEnum {
    CreativeSizeTypeUnspecified = "CREATIVE_SIZE_TYPE_UNSPECIFIED",
    Regular = "REGULAR",
    Interstitial = "INTERSTITIAL",
    Video = "VIDEO",
    Native = "NATIVE"
}

export enum CreativeSizeNativeTemplateEnum {
    UnknownNativeTemplate = "UNKNOWN_NATIVE_TEMPLATE",
    NativeContentAd = "NATIVE_CONTENT_AD",
    NativeAppInstallAd = "NATIVE_APP_INSTALL_AD",
    NativeVideoContentAd = "NATIVE_VIDEO_CONTENT_AD",
    NativeVideoAppInstallAd = "NATIVE_VIDEO_APP_INSTALL_AD"
}

export enum CreativeSizeSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Generic = "GENERIC",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE"
}


// CreativeSize
/** 
 * Specifies the size of the creative.
**/
export class CreativeSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedFormats" })
  allowedFormats?: CreativeSizeAllowedFormatsEnum[];

  @SpeakeasyMetadata({ data: "json, name=companionSizes", elemType: Size })
  companionSizes?: Size[];

  @SpeakeasyMetadata({ data: "json, name=creativeSizeType" })
  creativeSizeType?: CreativeSizeCreativeSizeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=nativeTemplate" })
  nativeTemplate?: CreativeSizeNativeTemplateEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=skippableAdType" })
  skippableAdType?: CreativeSizeSkippableAdTypeEnum;
}
