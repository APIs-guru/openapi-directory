import { SpeakeasyBase } from "../../../internal/utils";
import { ListGeofenceCollectionsResponseEntry } from "./listgeofencecollectionsresponseentry";
export declare class ListGeofenceCollectionsResponse extends SpeakeasyBase {
    entries: ListGeofenceCollectionsResponseEntry[];
    nextToken?: string;
}
