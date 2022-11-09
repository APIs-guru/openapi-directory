import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1KeyValueEntry } from "./googlecloudapigeev1keyvalueentry";


// GoogleCloudApigeeV1ListKeyValueEntriesResponse
/** 
 * The request structure for listing key value map keys and its corresponding values.
**/
export class GoogleCloudApigeeV1ListKeyValueEntriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyValueEntries", elemType: shared.GoogleCloudApigeeV1KeyValueEntry })
  keyValueEntries?: GoogleCloudApigeeV1KeyValueEntry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
