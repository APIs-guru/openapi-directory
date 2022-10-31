package shared




type DeobfuscationFileSymbolTypeEnum string

const (
    DeobfuscationFileSymbolTypeEnumDeobfuscationFileTypeUnspecified DeobfuscationFileSymbolTypeEnum = "deobfuscationFileTypeUnspecified"
DeobfuscationFileSymbolTypeEnumProguard DeobfuscationFileSymbolTypeEnum = "proguard"
DeobfuscationFileSymbolTypeEnumNativeCode DeobfuscationFileSymbolTypeEnum = "nativeCode"
)


type DeobfuscationFile struct {
    SymbolType *DeobfuscationFileSymbolTypeEnum `json:"symbolType,omitempty"`
    
}

