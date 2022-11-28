import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RobotSoftwareSuiteTypeEnum } from "./robotsoftwaresuitetypeenum";
import { RobotSoftwareSuiteVersionTypeEnum } from "./robotsoftwaresuiteversiontypeenum";



// RobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class RobotSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: RobotSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: RobotSoftwareSuiteVersionTypeEnum;
}
