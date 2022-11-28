import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListMapsResponseEntry } from "./listmapsresponseentry";



export class ListMapsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: ListMapsResponseEntry })
  entries: ListMapsResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
