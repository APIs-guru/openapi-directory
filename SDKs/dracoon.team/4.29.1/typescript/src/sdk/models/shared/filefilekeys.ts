import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileKeyContainer } from "./filekeycontainer";



// FileFileKeys
/** 
 * File key information
**/
export class FileFileKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileKeyContainer" })
  fileKeyContainer?: FileKeyContainer;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
