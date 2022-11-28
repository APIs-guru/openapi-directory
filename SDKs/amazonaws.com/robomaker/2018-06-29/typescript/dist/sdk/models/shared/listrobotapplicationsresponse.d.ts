import { SpeakeasyBase } from "../../../internal/utils";
import { RobotApplicationSummary } from "./robotapplicationsummary";
export declare class ListRobotApplicationsResponse extends SpeakeasyBase {
    nextToken?: string;
    robotApplicationSummaries?: RobotApplicationSummary[];
}
