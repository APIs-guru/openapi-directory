import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListTrackersResponseEntry } from "./listtrackersresponseentry";


export class ListTrackersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.ListTrackersResponseEntry })
  entries: ListTrackersResponseEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
