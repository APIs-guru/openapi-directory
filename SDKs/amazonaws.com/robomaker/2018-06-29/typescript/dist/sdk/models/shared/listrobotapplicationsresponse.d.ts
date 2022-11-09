import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotApplicationSummary } from "./robotapplicationsummary";
export declare class ListRobotApplicationsResponse extends SpeakeasyBase {
    nextToken?: string;
    robotApplicationSummaries?: RobotApplicationSummary[];
}
