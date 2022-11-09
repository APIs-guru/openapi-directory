import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { SimulationSoftwareSuite } from "./simulationsoftwaresuite";
/**
 * Summary information for a simulation application.
**/
export declare class SimulationApplicationSummary extends SpeakeasyBase {
    arn?: string;
    lastUpdatedAt?: Date;
    name?: string;
    robotSoftwareSuite?: RobotSoftwareSuite;
    simulationSoftwareSuite?: SimulationSoftwareSuite;
    version?: string;
}
