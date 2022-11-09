import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


export class DescribeSimulationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=compute" })
  compute?: ComputeResponse;

  @Metadata({ data: "json, name=dataSources", elemType: shared.DataSource })
  dataSources?: DataSource[];

  @Metadata({ data: "json, name=failureBehavior" })
  failureBehavior?: FailureBehaviorEnum;

  @Metadata({ data: "json, name=failureCode" })
  failureCode?: SimulationJobErrorCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=iamRole" })
  iamRole?: string;

  @Metadata({ data: "json, name=lastStartedAt" })
  lastStartedAt?: Date;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=maxJobDurationInSeconds" })
  maxJobDurationInSeconds?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkInterface" })
  networkInterface?: NetworkInterface;

  @Metadata({ data: "json, name=outputLocation" })
  outputLocation?: OutputLocation;

  @Metadata({ data: "json, name=robotApplications", elemType: shared.RobotApplicationConfig })
  robotApplications?: RobotApplicationConfig[];

  @Metadata({ data: "json, name=simulationApplications", elemType: shared.SimulationApplicationConfig })
  simulationApplications?: SimulationApplicationConfig[];

  @Metadata({ data: "json, name=simulationTimeMillis" })
  simulationTimeMillis?: number;

  @Metadata({ data: "json, name=status" })
  status?: SimulationJobStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfigResponse;
}
