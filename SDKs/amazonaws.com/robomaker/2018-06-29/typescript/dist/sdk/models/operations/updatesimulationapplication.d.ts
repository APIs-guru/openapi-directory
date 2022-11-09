import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateSimulationApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export declare class UpdateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a rendering engine.
**/
export declare class UpdateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
    name?: shared.RenderingEngineTypeEnum;
    version?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
**/
export declare class UpdateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
/**
 * Information about a simulation software suite.
**/
export declare class UpdateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
    name?: shared.SimulationSoftwareSuiteTypeEnum;
    version?: string;
}
export declare class UpdateSimulationApplicationRequestBody extends SpeakeasyBase {
    application: string;
    currentRevisionId?: string;
    environment?: UpdateSimulationApplicationRequestBodyEnvironment;
    renderingEngine?: UpdateSimulationApplicationRequestBodyRenderingEngine;
    robotSoftwareSuite: UpdateSimulationApplicationRequestBodyRobotSoftwareSuite;
    simulationSoftwareSuite: UpdateSimulationApplicationRequestBodySimulationSoftwareSuite;
    sources?: shared.SourceConfig[];
}
export declare class UpdateSimulationApplicationRequest extends SpeakeasyBase {
    headers: UpdateSimulationApplicationHeaders;
    request: UpdateSimulationApplicationRequestBody;
}
export declare class UpdateSimulationApplicationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateSimulationApplicationResponse?: shared.UpdateSimulationApplicationResponse;
}
