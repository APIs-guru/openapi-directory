import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RobotApplicationSummary } from "./robotapplicationsummary";


export class ListRobotApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=robotApplicationSummaries", elemType: shared.RobotApplicationSummary })
  robotApplicationSummaries?: RobotApplicationSummary[];
}
