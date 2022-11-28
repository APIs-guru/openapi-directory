import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3TagIds
/** 
 * List of S3 tag IDs
**/
export class S3TagIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: number[];
}
