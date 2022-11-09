import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileKeyContainer } from "./filekeycontainer";


// FileFileKeys
/** 
 * File key information
**/
export class FileFileKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileKeyContainer" })
  fileKeyContainer?: FileKeyContainer;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
