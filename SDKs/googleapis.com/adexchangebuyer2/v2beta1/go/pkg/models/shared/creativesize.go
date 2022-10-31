package shared




type CreativeSizeAllowedFormatsEnum string

const (
    CreativeSizeAllowedFormatsEnumUnknown CreativeSizeAllowedFormatsEnum = "UNKNOWN"
CreativeSizeAllowedFormatsEnumAudio CreativeSizeAllowedFormatsEnum = "AUDIO"
)



type CreativeSizeCreativeSizeTypeEnum string

const (
    CreativeSizeCreativeSizeTypeEnumCreativeSizeTypeUnspecified CreativeSizeCreativeSizeTypeEnum = "CREATIVE_SIZE_TYPE_UNSPECIFIED"
CreativeSizeCreativeSizeTypeEnumRegular CreativeSizeCreativeSizeTypeEnum = "REGULAR"
CreativeSizeCreativeSizeTypeEnumInterstitial CreativeSizeCreativeSizeTypeEnum = "INTERSTITIAL"
CreativeSizeCreativeSizeTypeEnumVideo CreativeSizeCreativeSizeTypeEnum = "VIDEO"
CreativeSizeCreativeSizeTypeEnumNative CreativeSizeCreativeSizeTypeEnum = "NATIVE"
)



type CreativeSizeNativeTemplateEnum string

const (
    CreativeSizeNativeTemplateEnumUnknownNativeTemplate CreativeSizeNativeTemplateEnum = "UNKNOWN_NATIVE_TEMPLATE"
CreativeSizeNativeTemplateEnumNativeContentAd CreativeSizeNativeTemplateEnum = "NATIVE_CONTENT_AD"
CreativeSizeNativeTemplateEnumNativeAppInstallAd CreativeSizeNativeTemplateEnum = "NATIVE_APP_INSTALL_AD"
CreativeSizeNativeTemplateEnumNativeVideoContentAd CreativeSizeNativeTemplateEnum = "NATIVE_VIDEO_CONTENT_AD"
CreativeSizeNativeTemplateEnumNativeVideoAppInstallAd CreativeSizeNativeTemplateEnum = "NATIVE_VIDEO_APP_INSTALL_AD"
)



type CreativeSizeSkippableAdTypeEnum string

const (
    CreativeSizeSkippableAdTypeEnumSkippableAdTypeUnspecified CreativeSizeSkippableAdTypeEnum = "SKIPPABLE_AD_TYPE_UNSPECIFIED"
CreativeSizeSkippableAdTypeEnumGeneric CreativeSizeSkippableAdTypeEnum = "GENERIC"
CreativeSizeSkippableAdTypeEnumInstreamSelect CreativeSizeSkippableAdTypeEnum = "INSTREAM_SELECT"
CreativeSizeSkippableAdTypeEnumNotSkippable CreativeSizeSkippableAdTypeEnum = "NOT_SKIPPABLE"
)


type CreativeSize struct {
    AllowedFormats []CreativeSizeAllowedFormatsEnum `json:"allowedFormats,omitempty"`
    CompanionSizes []Size `json:"companionSizes,omitempty"`
    CreativeSizeType *CreativeSizeCreativeSizeTypeEnum `json:"creativeSizeType,omitempty"`
    NativeTemplate *CreativeSizeNativeTemplateEnum `json:"nativeTemplate,omitempty"`
    Size *Size `json:"size,omitempty"`
    SkippableAdType *CreativeSizeSkippableAdTypeEnum `json:"skippableAdType,omitempty"`
    
}

