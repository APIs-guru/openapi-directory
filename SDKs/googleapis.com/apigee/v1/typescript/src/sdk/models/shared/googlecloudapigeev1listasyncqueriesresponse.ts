import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1AsyncQuery } from "./googlecloudapigeev1asyncquery";



// GoogleCloudApigeeV1ListAsyncQueriesResponse
/** 
 * The response for ListAsyncQueries.
**/
export class GoogleCloudApigeeV1ListAsyncQueriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queries", elemType: GoogleCloudApigeeV1AsyncQuery })
  queries?: GoogleCloudApigeeV1AsyncQuery[];
}
