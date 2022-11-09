import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspacesIpGroup } from "./workspacesipgroup";


export class DescribeIpGroupsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Result", elemType: shared.WorkspacesIpGroup })
  result?: WorkspacesIpGroup[];
}
