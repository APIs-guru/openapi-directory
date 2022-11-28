import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeResponse } from "./computeresponse";
import { DataSource } from "./datasource";
import { FailureBehaviorEnum } from "./failurebehaviorenum";
import { SimulationJobErrorCodeEnum } from "./simulationjoberrorcodeenum";
import { LoggingConfig } from "./loggingconfig";
import { NetworkInterface } from "./networkinterface";
import { OutputLocation } from "./outputlocation";
import { RobotApplicationConfig } from "./robotapplicationconfig";
import { SimulationApplicationConfig } from "./simulationapplicationconfig";
import { SimulationJobStatusEnum } from "./simulationjobstatusenum";
import { VpcConfigResponse } from "./vpcconfigresponse";



// SimulationJob
/** 
 * Information about a simulation job.
**/
export class SimulationJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=compute" })
  compute?: ComputeResponse;

  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: DataSource })
  dataSources?: DataSource[];

  @SpeakeasyMetadata({ data: "json, name=failureBehavior" })
  failureBehavior?: FailureBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: SimulationJobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=iamRole" })
  iamRole?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStartedAt" })
  lastStartedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=maxJobDurationInSeconds" })
  maxJobDurationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkInterface" })
  networkInterface?: NetworkInterface;

  @SpeakeasyMetadata({ data: "json, name=outputLocation" })
  outputLocation?: OutputLocation;

  @SpeakeasyMetadata({ data: "json, name=robotApplications", elemType: RobotApplicationConfig })
  robotApplications?: RobotApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=simulationApplications", elemType: SimulationApplicationConfig })
  simulationApplications?: SimulationApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=simulationTimeMillis" })
  simulationTimeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SimulationJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfigResponse;
}
