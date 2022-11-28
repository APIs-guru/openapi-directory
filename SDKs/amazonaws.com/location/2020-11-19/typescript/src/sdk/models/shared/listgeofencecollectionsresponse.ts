import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListGeofenceCollectionsResponseEntry } from "./listgeofencecollectionsresponseentry";



export class ListGeofenceCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: ListGeofenceCollectionsResponseEntry })
  entries: ListGeofenceCollectionsResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
