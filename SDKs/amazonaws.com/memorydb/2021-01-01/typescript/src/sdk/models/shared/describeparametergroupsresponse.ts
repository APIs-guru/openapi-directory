import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterGroup } from "./parametergroup";


export class DescribeParameterGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParameterGroups", elemType: shared.ParameterGroup })
  parameterGroups?: ParameterGroup[];
}
