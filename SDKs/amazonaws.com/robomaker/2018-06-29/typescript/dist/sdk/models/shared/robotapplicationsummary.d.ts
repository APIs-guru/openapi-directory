import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
/**
 * Summary information for a robot application.
**/
export declare class RobotApplicationSummary extends SpeakeasyBase {
    arn?: string;
    lastUpdatedAt?: Date;
    name?: string;
    robotSoftwareSuite?: RobotSoftwareSuite;
    version?: string;
}
