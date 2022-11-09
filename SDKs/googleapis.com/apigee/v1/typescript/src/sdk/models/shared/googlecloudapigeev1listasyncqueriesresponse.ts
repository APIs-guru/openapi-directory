import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1AsyncQuery } from "./googlecloudapigeev1asyncquery";


// GoogleCloudApigeeV1ListAsyncQueriesResponse
/** 
 * The response for ListAsyncQueries.
**/
export class GoogleCloudApigeeV1ListAsyncQueriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=queries", elemType: shared.GoogleCloudApigeeV1AsyncQuery })
  queries?: GoogleCloudApigeeV1AsyncQuery[];
}
