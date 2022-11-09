import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsService
/** 
 * Provides information about an Amazon Web Service that performed an action on an affected resource.
**/
export class AwsService extends SpeakeasyBase {
  @Metadata({ data: "json, name=invokedBy" })
  invokedBy?: string;
}
