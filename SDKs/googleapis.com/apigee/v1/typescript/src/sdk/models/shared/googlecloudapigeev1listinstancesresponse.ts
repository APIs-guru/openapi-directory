import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Instance } from "./googlecloudapigeev1instance";


// GoogleCloudApigeeV1ListInstancesResponse
/** 
 * Response for ListInstances.
**/
export class GoogleCloudApigeeV1ListInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.GoogleCloudApigeeV1Instance })
  instances?: GoogleCloudApigeeV1Instance[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
