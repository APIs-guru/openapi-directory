import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListGeofenceCollectionsResponseEntry } from "./listgeofencecollectionsresponseentry";


export class ListGeofenceCollectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.ListGeofenceCollectionsResponseEntry })
  entries: ListGeofenceCollectionsResponseEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
