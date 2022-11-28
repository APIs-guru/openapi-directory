import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSimulationJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateSimulationJobRequestBodyCompute
/** 
 * Compute information for the simulation job.
**/
export class CreateSimulationJobRequestBodyCompute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simulationUnitLimit" })
  simulationUnitLimit?: number;
}

export enum CreateSimulationJobRequestBodyFailureBehaviorEnum {
    Fail = "Fail",
    Continue = "Continue"
}


// CreateSimulationJobRequestBodyLoggingConfig
/** 
 * The logging configuration.
**/
export class CreateSimulationJobRequestBodyLoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordAllRosTopics" })
  recordAllRosTopics?: boolean;
}


// CreateSimulationJobRequestBodyOutputLocation
/** 
 * The output location.
**/
export class CreateSimulationJobRequestBodyOutputLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Prefix" })
  s3Prefix?: string;
}


// CreateSimulationJobRequestBodyVpcConfig
/** 
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
**/
export class CreateSimulationJobRequestBodyVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];
}


export class CreateSimulationJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=compute" })
  compute?: CreateSimulationJobRequestBodyCompute;

  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: shared.DataSourceConfig })
  dataSources?: shared.DataSourceConfig[];

  @SpeakeasyMetadata({ data: "json, name=failureBehavior" })
  failureBehavior?: CreateSimulationJobRequestBodyFailureBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=iamRole" })
  iamRole: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: CreateSimulationJobRequestBodyLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=maxJobDurationInSeconds" })
  maxJobDurationInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=outputLocation" })
  outputLocation?: CreateSimulationJobRequestBodyOutputLocation;

  @SpeakeasyMetadata({ data: "json, name=robotApplications", elemType: shared.RobotApplicationConfig })
  robotApplications?: shared.RobotApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=simulationApplications", elemType: shared.SimulationApplicationConfig })
  simulationApplications?: shared.SimulationApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: CreateSimulationJobRequestBodyVpcConfig;
}


export class CreateSimulationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSimulationJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSimulationJobRequestBody;
}


export class CreateSimulationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSimulationJobResponse?: shared.CreateSimulationJobResponse;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
