import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogGroup } from "./loggroup";



export class DescribeLogGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroups", elemType: LogGroup })
  logGroups?: LogGroup[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
