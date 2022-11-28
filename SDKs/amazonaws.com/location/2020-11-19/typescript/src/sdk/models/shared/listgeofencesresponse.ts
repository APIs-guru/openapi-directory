import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListGeofenceResponseEntry } from "./listgeofenceresponseentry";



export class ListGeofencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: ListGeofenceResponseEntry })
  entries: ListGeofenceResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
