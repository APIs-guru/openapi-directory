import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { SimulationSoftwareSuite } from "./simulationsoftwaresuite";



// SimulationApplicationSummary
/** 
 * Summary information for a simulation application.
**/
export class SimulationApplicationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite?: RobotSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=simulationSoftwareSuite" })
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
