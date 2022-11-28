import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSimulationApplicationHeaders extends SpeakeasyBase {
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


// CreateSimulationApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class CreateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// CreateSimulationApplicationRequestBodyRenderingEngine
/** 
 * Information about a rendering engine.
**/
export class CreateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.RenderingEngineTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// CreateSimulationApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class CreateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


// CreateSimulationApplicationRequestBodySimulationSoftwareSuite
/** 
 * Information about a simulation software suite.
**/
export class CreateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.SimulationSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class CreateSimulationApplicationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: CreateSimulationApplicationRequestBodyEnvironment;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=renderingEngine" })
  renderingEngine?: CreateSimulationApplicationRequestBodyRenderingEngine;

  @SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: CreateSimulationApplicationRequestBodyRobotSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=simulationSoftwareSuite" })
  simulationSoftwareSuite: CreateSimulationApplicationRequestBodySimulationSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateSimulationApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSimulationApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSimulationApplicationRequestBody;
}


export class CreateSimulationApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSimulationApplicationResponse?: shared.CreateSimulationApplicationResponse;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
