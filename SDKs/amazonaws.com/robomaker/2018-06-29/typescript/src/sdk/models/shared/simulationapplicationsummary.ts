import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { SimulationSoftwareSuite } from "./simulationsoftwaresuite";


// SimulationApplicationSummary
/** 
 * Summary information for a simulation application.
**/
export class SimulationApplicationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite?: RobotSoftwareSuite;

  @Metadata({ data: "json, name=simulationSoftwareSuite" })
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
