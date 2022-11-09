import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=compute" })
  compute?: Compute;

  @Metadata({ data: "json, name=dataSources", elemType: shared.DataSourceConfig })
  dataSources?: DataSourceConfig[];

  @Metadata({ data: "json, name=failureBehavior" })
  failureBehavior?: FailureBehaviorEnum;

  @Metadata({ data: "json, name=iamRole" })
  iamRole?: string;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=maxJobDurationInSeconds" })
  maxJobDurationInSeconds: number;

  @Metadata({ data: "json, name=outputLocation" })
  outputLocation?: OutputLocation;

  @Metadata({ data: "json, name=robotApplications", elemType: shared.RobotApplicationConfig })
  robotApplications?: RobotApplicationConfig[];

  @Metadata({ data: "json, name=simulationApplications", elemType: shared.SimulationApplicationConfig })
  simulationApplications?: SimulationApplicationConfig[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=useDefaultApplications" })
  useDefaultApplications?: boolean;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;
}
