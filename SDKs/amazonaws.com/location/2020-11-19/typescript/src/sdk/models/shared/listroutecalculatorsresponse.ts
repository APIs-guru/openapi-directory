import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListRouteCalculatorsResponseEntry } from "./listroutecalculatorsresponseentry";



export class ListRouteCalculatorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: ListRouteCalculatorsResponseEntry })
  entries: ListRouteCalculatorsResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
