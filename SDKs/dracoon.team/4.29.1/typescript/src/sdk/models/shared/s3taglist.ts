import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Tag } from "./s3tag";



// S3TagList
/** 
 * List of S3 tags
**/
export class S3TagList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: S3Tag })
  items?: S3Tag[];
}
