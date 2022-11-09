import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListMapsResponseEntry } from "./listmapsresponseentry";


export class ListMapsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.ListMapsResponseEntry })
  entries: ListMapsResponseEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
