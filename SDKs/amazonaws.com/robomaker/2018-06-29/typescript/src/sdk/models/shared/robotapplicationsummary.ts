import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";



// RobotApplicationSummary
/** 
 * Summary information for a robot application.
**/
export class RobotApplicationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite?: RobotSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
