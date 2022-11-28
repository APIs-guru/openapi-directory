import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";



// FileList
/** 
 * Files List
**/
export class FileList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files: File[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
