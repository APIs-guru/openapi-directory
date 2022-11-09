import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Compute } from "./compute";
import { DataSourceConfig } from "./datasourceconfig";
import { FailureBehaviorEnum } from "./failurebehaviorenum";
import { LoggingConfig } from "./loggingconfig";
import { OutputLocation } from "./outputlocation";
import { RobotApplicationConfig } from "./robotapplicationconfig";
import { SimulationApplicationConfig } from "./simulationapplicationconfig";
import { VpcConfig } from "./vpcconfig";
/**
 * Information about a simulation job request.
**/
export declare class SimulationJobRequest extends SpeakeasyBase {
    compute?: Compute;
    dataSources?: DataSourceConfig[];
    failureBehavior?: FailureBehaviorEnum;
    iamRole?: string;
    loggingConfig?: LoggingConfig;
    maxJobDurationInSeconds: number;
    outputLocation?: OutputLocation;
    robotApplications?: RobotApplicationConfig[];
    simulationApplications?: SimulationApplicationConfig[];
    tags?: Map<string, string>;
    useDefaultApplications?: boolean;
    vpcConfig?: VpcConfig;
}
