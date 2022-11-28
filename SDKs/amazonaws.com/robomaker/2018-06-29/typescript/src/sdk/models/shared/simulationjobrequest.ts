import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Compute } from "./compute";
import { DataSourceConfig } from "./datasourceconfig";
import { FailureBehaviorEnum } from "./failurebehaviorenum";
import { LoggingConfig } from "./loggingconfig";
import { OutputLocation } from "./outputlocation";
import { RobotApplicationConfig } from "./robotapplicationconfig";
import { SimulationApplicationConfig } from "./simulationapplicationconfig";
import { VpcConfig } from "./vpcconfig";



// SimulationJobRequest
/** 
 * Information about a simulation job request.
**/
export class SimulationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compute" })
  compute?: Compute;

  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: DataSourceConfig })
  dataSources?: DataSourceConfig[];

  @SpeakeasyMetadata({ data: "json, name=failureBehavior" })
  failureBehavior?: FailureBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=iamRole" })
  iamRole?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=maxJobDurationInSeconds" })
  maxJobDurationInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=outputLocation" })
  outputLocation?: OutputLocation;

  @SpeakeasyMetadata({ data: "json, name=robotApplications", elemType: RobotApplicationConfig })
  robotApplications?: RobotApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=simulationApplications", elemType: SimulationApplicationConfig })
  simulationApplications?: SimulationApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useDefaultApplications" })
  useDefaultApplications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;
}
