import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupSummary } from "./groupsummary";


export class GetGroupsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Groups", elemType: shared.GroupSummary })
  groups?: GroupSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
