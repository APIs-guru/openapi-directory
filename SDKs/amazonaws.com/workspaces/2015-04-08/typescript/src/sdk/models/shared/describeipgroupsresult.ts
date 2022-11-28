import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspacesIpGroup } from "./workspacesipgroup";



export class DescribeIpGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: WorkspacesIpGroup })
  result?: WorkspacesIpGroup[];
}
