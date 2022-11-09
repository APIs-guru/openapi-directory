import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";


// FileList
/** 
 * Files List
**/
export class FileList extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.File })
  files: File[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
