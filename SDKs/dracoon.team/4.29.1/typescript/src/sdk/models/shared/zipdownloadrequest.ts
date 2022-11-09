import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZipDownloadRequest
/** 
 * Request model for ZIP download
**/
export class ZipDownloadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeIds" })
  nodeIds: number[];
}
