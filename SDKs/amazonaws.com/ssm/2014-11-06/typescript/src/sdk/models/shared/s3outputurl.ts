import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3OutputUrl
/** 
 * A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the results of this request.
**/
export class S3OutputUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OutputUrl" })
  outputUrl?: string;
}
