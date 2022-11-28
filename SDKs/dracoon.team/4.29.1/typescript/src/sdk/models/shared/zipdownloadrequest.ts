import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZipDownloadRequest
/** 
 * Request model for ZIP download
**/
export class ZipDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeIds" })
  nodeIds: number[];
}
