import { SpeakeasyBase } from "../../../internal/utils";
import { RobotSoftwareSuiteTypeEnum } from "./robotsoftwaresuitetypeenum";
import { RobotSoftwareSuiteVersionTypeEnum } from "./robotsoftwaresuiteversiontypeenum";
/**
 * Information about a robot software suite (ROS distribution).
**/
export declare class RobotSoftwareSuite extends SpeakeasyBase {
    name?: RobotSoftwareSuiteTypeEnum;
    version?: RobotSoftwareSuiteVersionTypeEnum;
}
