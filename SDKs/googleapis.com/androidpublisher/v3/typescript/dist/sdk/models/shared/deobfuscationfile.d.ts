import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeobfuscationFileSymbolTypeEnum {
    DeobfuscationFileTypeUnspecified = "deobfuscationFileTypeUnspecified",
    Proguard = "proguard",
    NativeCode = "nativeCode"
}
/**
 * Represents a deobfuscation file.
**/
export declare class DeobfuscationFile extends SpeakeasyBase {
    symbolType?: DeobfuscationFileSymbolTypeEnum;
}
