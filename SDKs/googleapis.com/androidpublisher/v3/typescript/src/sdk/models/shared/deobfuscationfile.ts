import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeobfuscationFileSymbolTypeEnum {
    DeobfuscationFileTypeUnspecified = "deobfuscationFileTypeUnspecified"
,    Proguard = "proguard"
,    NativeCode = "nativeCode"
}


// DeobfuscationFile
/** 
 * Represents a deobfuscation file.
**/
export class DeobfuscationFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=symbolType" })
  symbolType?: DeobfuscationFileSymbolTypeEnum;
}
