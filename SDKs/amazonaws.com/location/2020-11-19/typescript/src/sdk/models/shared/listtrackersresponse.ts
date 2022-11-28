import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListTrackersResponseEntry } from "./listtrackersresponseentry";



export class ListTrackersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: ListTrackersResponseEntry })
  entries: ListTrackersResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
