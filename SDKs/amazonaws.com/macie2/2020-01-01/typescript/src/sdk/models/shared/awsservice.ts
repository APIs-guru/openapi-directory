import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsService
/** 
 * Provides information about an Amazon Web Service that performed an action on an affected resource.
**/
export class AwsService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invokedBy" })
  invokedBy?: string;
}
