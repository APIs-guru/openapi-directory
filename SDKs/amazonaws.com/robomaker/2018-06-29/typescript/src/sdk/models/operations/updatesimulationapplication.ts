import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSimulationApplicationHeaders extends SpeakeasyBase {
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


// UpdateSimulationApplicationRequestBodyEnvironment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class UpdateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// UpdateSimulationApplicationRequestBodyRenderingEngine
/** 
 * Information about a rendering engine.
**/
export class UpdateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.RenderingEngineTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// UpdateSimulationApplicationRequestBodyRobotSoftwareSuite
/** 
 * Information about a robot software suite (ROS distribution).
**/
export class UpdateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.RobotSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}


// UpdateSimulationApplicationRequestBodySimulationSoftwareSuite
/** 
 * Information about a simulation software suite.
**/
export class UpdateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.SimulationSoftwareSuiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class UpdateSimulationApplicationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: string;

  @SpeakeasyMetadata({ data: "json, name=currentRevisionId" })
  currentRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: UpdateSimulationApplicationRequestBodyEnvironment;

  @SpeakeasyMetadata({ data: "json, name=renderingEngine" })
  renderingEngine?: UpdateSimulationApplicationRequestBodyRenderingEngine;

  @SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" })
  robotSoftwareSuite: UpdateSimulationApplicationRequestBodyRobotSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=simulationSoftwareSuite" })
  simulationSoftwareSuite: UpdateSimulationApplicationRequestBodySimulationSoftwareSuite;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: shared.SourceConfig })
  sources?: shared.SourceConfig[];
}


export class UpdateSimulationApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateSimulationApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSimulationApplicationRequestBody;
}


export class UpdateSimulationApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateSimulationApplicationResponse?: shared.UpdateSimulationApplicationResponse;
}
