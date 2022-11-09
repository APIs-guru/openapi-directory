import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotSoftwareSuiteTypeEnum } from "./robotsoftwaresuitetypeenum";
import { RobotSoftwareSuiteVersionTypeEnum } from "./robotsoftwaresuiteversiontypeenum";


// RobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class RobotSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: RobotSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: RobotSoftwareSuiteVersionTypeEnum;
}
