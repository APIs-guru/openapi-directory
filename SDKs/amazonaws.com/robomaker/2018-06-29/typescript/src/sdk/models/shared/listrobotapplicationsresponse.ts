import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RobotApplicationSummary } from "./robotapplicationsummary";



export class ListRobotApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=robotApplicationSummaries", elemType: RobotApplicationSummary })
  robotApplicationSummaries?: RobotApplicationSummary[];
}
