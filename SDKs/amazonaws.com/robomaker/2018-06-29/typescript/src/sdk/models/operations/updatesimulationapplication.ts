import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSimulationApplicationHeaders extends SpeakeasyBase {
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


// UpdateSimulationApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class UpdateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// UpdateSimulationApplicationRequestBodyRenderingEngine
/** 
 * Information about a rendering engine.
**/
export class UpdateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.RenderingEngineTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


// UpdateSimulationApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class UpdateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


// UpdateSimulationApplicationRequestBodySimulationSoftwareSuite
/** 
 * Information about a simulation software suite.
**/
export class UpdateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.SimulationSoftwareSuiteTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class UpdateSimulationApplicationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application: string;

  @Metadata({ data: "json, name=currentRevisionId" })
  currentRevisionId?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: UpdateSimulationApplicationRequestBodyEnvironment;

  @Metadata({ data: "json, name=renderingEngine" })
  renderingEngine?: UpdateSimulationApplicationRequestBodyRenderingEngine;

  @Metadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: UpdateSimulationApplicationRequestBodyRobotSoftwareSuite;

  @Metadata({ data: "json, name=simulationSoftwareSuite" })
  simulationSoftwareSuite: UpdateSimulationApplicationRequestBodySimulationSoftwareSuite;

  @Metadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];
}


export class UpdateSimulationApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSimulationApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSimulationApplicationRequestBody;
}


export class UpdateSimulationApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateSimulationApplicationResponse?: shared.UpdateSimulationApplicationResponse;
}
