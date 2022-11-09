import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListRouteCalculatorsResponseEntry } from "./listroutecalculatorsresponseentry";


export class ListRouteCalculatorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.ListRouteCalculatorsResponseEntry })
  entries: ListRouteCalculatorsResponseEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
