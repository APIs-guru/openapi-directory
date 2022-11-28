import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1KeyValueEntry } from "./googlecloudapigeev1keyvalueentry";
/**
 * The request structure for listing key value map keys and its corresponding values.
**/
export declare class GoogleCloudApigeeV1ListKeyValueEntriesResponse extends SpeakeasyBase {
    keyValueEntries?: GoogleCloudApigeeV1KeyValueEntry[];
    nextPageToken?: string;
}
