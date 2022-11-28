import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1KeyValueEntry } from "./googlecloudapigeev1keyvalueentry";



// GoogleCloudApigeeV1ListKeyValueEntriesResponse
/** 
 * The request structure for listing key value map keys and its corresponding values.
**/
export class GoogleCloudApigeeV1ListKeyValueEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyValueEntries", elemType: GoogleCloudApigeeV1KeyValueEntry })
  keyValueEntries?: GoogleCloudApigeeV1KeyValueEntry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
