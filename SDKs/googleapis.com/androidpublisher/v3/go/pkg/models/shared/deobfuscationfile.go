package shared

type DeobfuscationFileSymbolTypeEnum string

const (
	DeobfuscationFileSymbolTypeEnumDeobfuscationFileTypeUnspecified DeobfuscationFileSymbolTypeEnum = "deobfuscationFileTypeUnspecified"
	DeobfuscationFileSymbolTypeEnumProguard                         DeobfuscationFileSymbolTypeEnum = "proguard"
	DeobfuscationFileSymbolTypeEnumNativeCode                       DeobfuscationFileSymbolTypeEnum = "nativeCode"
)

// DeobfuscationFile
// Represents a deobfuscation file.
type DeobfuscationFile struct {
	SymbolType *DeobfuscationFileSymbolTypeEnum `json:"symbolType,omitempty"`
}
