package shared




type TextTransformationEnum string

const (
    TextTransformationEnumNone TextTransformationEnum = "NONE"
TextTransformationEnumCompressWhiteSpace TextTransformationEnum = "COMPRESS_WHITE_SPACE"
TextTransformationEnumHTMLEntityDecode TextTransformationEnum = "HTML_ENTITY_DECODE"
TextTransformationEnumLowercase TextTransformationEnum = "LOWERCASE"
TextTransformationEnumCmdLine TextTransformationEnum = "CMD_LINE"
TextTransformationEnumURLDecode TextTransformationEnum = "URL_DECODE"
)


