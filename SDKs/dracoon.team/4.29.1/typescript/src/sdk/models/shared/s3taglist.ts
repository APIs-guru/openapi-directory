import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3Tag } from "./s3tag";


// S3TagList
/** 
 * List of S3 tags
**/
export class S3TagList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.S3Tag })
  items?: S3Tag[];
}
