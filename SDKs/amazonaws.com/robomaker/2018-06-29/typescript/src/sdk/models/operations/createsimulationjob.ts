import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSimulationJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateSimulationJobRequestBodyCompute
/** 
 * Compute information for the simulation job.
**/
export class CreateSimulationJobRequestBodyCompute extends SpeakeasyBase {
  @Metadata({ data: "json, name=simulationUnitLimit" })
  simulationUnitLimit?: number;
}

export enum CreateSimulationJobRequestBodyFailureBehaviorEnum {
    Fail = "Fail"
,    Continue = "Continue"
}


// CreateSimulationJobRequestBodyLoggingConfig
/** 
 * The logging configuration.
**/
export class CreateSimulationJobRequestBodyLoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=recordAllRosTopics" })
  recordAllRosTopics?: boolean;
}


// CreateSimulationJobRequestBodyOutputLocation
/** 
 * The output location.
**/
export class CreateSimulationJobRequestBodyOutputLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3Prefix" })
  s3Prefix?: string;
}


// CreateSimulationJobRequestBodyVpcConfig
/** 
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
**/
export class CreateSimulationJobRequestBodyVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: boolean;

  @Metadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];
}


export class CreateSimulationJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=compute" })
  compute?: CreateSimulationJobRequestBodyCompute;

  @Metadata({ data: "json, name=dataSources", elemType: shared.DataSourceConfig })
  dataSources?: shared.DataSourceConfig[];

  @Metadata({ data: "json, name=failureBehavior" })
  failureBehavior?: CreateSimulationJobRequestBodyFailureBehaviorEnum;

  @Metadata({ data: "json, name=iamRole" })
  iamRole: string;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: CreateSimulationJobRequestBodyLoggingConfig;

  @Metadata({ data: "json, name=maxJobDurationInSeconds" })
  maxJobDurationInSeconds: number;

  @Metadata({ data: "json, name=outputLocation" })
  outputLocation?: CreateSimulationJobRequestBodyOutputLocation;

  @Metadata({ data: "json, name=robotApplications", elemType: shared.RobotApplicationConfig })
  robotApplications?: shared.RobotApplicationConfig[];

  @Metadata({ data: "json, name=simulationApplications", elemType: shared.SimulationApplicationConfig })
  simulationApplications?: shared.SimulationApplicationConfig[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: CreateSimulationJobRequestBodyVpcConfig;
}


export class CreateSimulationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSimulationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSimulationJobRequestBody;
}


export class CreateSimulationJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSimulationJobResponse?: shared.CreateSimulationJobResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
