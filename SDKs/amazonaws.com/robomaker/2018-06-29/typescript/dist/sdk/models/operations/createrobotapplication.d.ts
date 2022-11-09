import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateRobotApplicationHeaders extends SpeakeasyBase {
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
export declare class CreateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
**/
export declare class CreateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
export declare class CreateRobotApplicationRequestBody extends SpeakeasyBase {
    environment?: CreateRobotApplicationRequestBodyEnvironment;
    name: string;
    robotSoftwareSuite: CreateRobotApplicationRequestBodyRobotSoftwareSuite;
    sources?: shared.SourceConfig[];
    tags?: Map<string, string>;
}
export declare class CreateRobotApplicationRequest extends SpeakeasyBase {
    headers: CreateRobotApplicationHeaders;
    request: CreateRobotApplicationRequestBody;
}
export declare class CreateRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    createRobotApplicationResponse?: shared.CreateRobotApplicationResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
