import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeobfuscationFile } from "./deobfuscationfile";



export class DeobfuscationFilesUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deobfuscationFile?: DeobfuscationFile;
}
