import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupSummary } from "./groupsummary";



export class GetGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Groups", elemType: GroupSummary })
  groups?: GroupSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
