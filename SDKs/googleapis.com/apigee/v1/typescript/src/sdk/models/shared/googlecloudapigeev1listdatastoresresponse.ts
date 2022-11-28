import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Datastore } from "./googlecloudapigeev1datastore";



// GoogleCloudApigeeV1ListDatastoresResponse
/** 
 * The response for ListDatastores
**/
export class GoogleCloudApigeeV1ListDatastoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastores", elemType: GoogleCloudApigeeV1Datastore })
  datastores?: GoogleCloudApigeeV1Datastore[];
}
