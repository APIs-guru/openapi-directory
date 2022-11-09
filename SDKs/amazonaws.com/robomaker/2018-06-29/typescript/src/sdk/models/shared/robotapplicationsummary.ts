import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";


// RobotApplicationSummary
/** 
 * Summary information for a robot application.
**/
export class RobotApplicationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite?: RobotSoftwareSuite;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
