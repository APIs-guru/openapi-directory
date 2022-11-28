import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeobfuscationFileSymbolTypeEnum {
    DeobfuscationFileTypeUnspecified = "deobfuscationFileTypeUnspecified",
    Proguard = "proguard",
    NativeCode = "nativeCode"
}


// DeobfuscationFile
/** 
 * Represents a deobfuscation file.
**/
export class DeobfuscationFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=symbolType" })
  symbolType?: DeobfuscationFileSymbolTypeEnum;
}
