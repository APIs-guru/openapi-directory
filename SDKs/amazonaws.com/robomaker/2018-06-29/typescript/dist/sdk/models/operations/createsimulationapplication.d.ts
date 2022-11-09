import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateSimulationApplicationHeaders extends SpeakeasyBase {
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
export declare class CreateSimulationApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a rendering engine.
**/
export declare class CreateSimulationApplicationRequestBodyRenderingEngine extends SpeakeasyBase {
    name?: shared.RenderingEngineTypeEnum;
    version?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
**/
export declare class CreateSimulationApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
/**
 * Information about a simulation software suite.
**/
export declare class CreateSimulationApplicationRequestBodySimulationSoftwareSuite extends SpeakeasyBase {
    name?: shared.SimulationSoftwareSuiteTypeEnum;
    version?: string;
}
export declare class CreateSimulationApplicationRequestBody extends SpeakeasyBase {
    environment?: CreateSimulationApplicationRequestBodyEnvironment;
    name: string;
    renderingEngine?: CreateSimulationApplicationRequestBodyRenderingEngine;
    robotSoftwareSuite: CreateSimulationApplicationRequestBodyRobotSoftwareSuite;
    simulationSoftwareSuite: CreateSimulationApplicationRequestBodySimulationSoftwareSuite;
    sources?: shared.SourceConfig[];
    tags?: Map<string, string>;
}
export declare class CreateSimulationApplicationRequest extends SpeakeasyBase {
    headers: CreateSimulationApplicationHeaders;
    request: CreateSimulationApplicationRequestBody;
}
export declare class CreateSimulationApplicationResponse extends SpeakeasyBase {
    contentType: string;
    createSimulationApplicationResponse?: shared.CreateSimulationApplicationResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
