import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListGeofenceResponseEntry } from "./listgeofenceresponseentry";


export class ListGeofencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.ListGeofenceResponseEntry })
  entries: ListGeofenceResponseEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
