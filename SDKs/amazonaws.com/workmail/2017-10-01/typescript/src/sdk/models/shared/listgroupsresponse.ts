import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



export class ListGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Groups", elemType: Group })
  groups?: Group[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
