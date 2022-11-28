import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Instance } from "./googlecloudapigeev1instance";



// GoogleCloudApigeeV1ListInstancesResponse
/** 
 * Response for ListInstances.
**/
export class GoogleCloudApigeeV1ListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: GoogleCloudApigeeV1Instance })
  instances?: GoogleCloudApigeeV1Instance[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
