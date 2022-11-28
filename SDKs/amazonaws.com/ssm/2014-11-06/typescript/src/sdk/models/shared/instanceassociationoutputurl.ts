import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3OutputUrl } from "./s3outputurl";



// InstanceAssociationOutputUrl
/** 
 * The URL of S3 bucket where you want to store the results of this request.
**/
export class InstanceAssociationOutputUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3OutputUrl" })
  s3OutputUrl?: S3OutputUrl;
}
