import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3TagIds
/** 
 * List of S3 tag IDs
**/
export class S3TagIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: number[];
}
