import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Datastore } from "./googlecloudapigeev1datastore";


// GoogleCloudApigeeV1ListDatastoresResponse
/** 
 * The response for ListDatastores
**/
export class GoogleCloudApigeeV1ListDatastoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datastores", elemType: shared.GoogleCloudApigeeV1Datastore })
  datastores?: GoogleCloudApigeeV1Datastore[];
}
