import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";


// ListFilesResponse
/** 
 * The response from listing files.
**/
export class ListFilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.File })
  files?: File[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
