import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogGroup } from "./loggroup";


export class DescribeLogGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroups", elemType: shared.LogGroup })
  logGroups?: LogGroup[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
