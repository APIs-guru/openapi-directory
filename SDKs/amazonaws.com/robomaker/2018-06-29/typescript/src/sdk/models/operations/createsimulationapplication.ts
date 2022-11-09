import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSimulationApplicationHeaders extends SpeakeasyBase {
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


// CreateSimulationApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class CreateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// CreateSimulationApplicationRequestBodyRenderingEngine
/** 
 * Information about a rendering engine.
**/
export class CreateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.RenderingEngineTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


// CreateSimulationApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class CreateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


// CreateSimulationApplicationRequestBodySimulationSoftwareSuite
/** 
 * Information about a simulation software suite.
**/
export class CreateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.SimulationSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class CreateSimulationApplicationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: CreateSimulationApplicationRequestBodyEnvironment;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=renderingEngine" })
  renderingEngine?: CreateSimulationApplicationRequestBodyRenderingEngine;

  @Metadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: CreateSimulationApplicationRequestBodyRobotSoftwareSuite;

  @Metadata({ data: "json, name=simulationSoftwareSuite" })
  simulationSoftwareSuite: CreateSimulationApplicationRequestBodySimulationSoftwareSuite;

  @Metadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateSimulationApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSimulationApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSimulationApplicationRequestBody;
}


export class CreateSimulationApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSimulationApplicationResponse?: shared.CreateSimulationApplicationResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
