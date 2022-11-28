import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRobotApplicationHeaders extends SpeakeasyBase {
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
export declare class UpdateRobotApplicationRequestBodyEnvironment extends SpeakeasyBase {
    uri?: string;
}
/**
 * Information about a robot software suite (ROS distribution).
**/
export declare class UpdateRobotApplicationRequestBodyRobotSoftwareSuite extends SpeakeasyBase {
    name?: shared.RobotSoftwareSuiteTypeEnum;
    version?: shared.RobotSoftwareSuiteVersionTypeEnum;
}
export declare class UpdateRobotApplicationRequestBody extends SpeakeasyBase {
    application: string;
    currentRevisionId?: string;
    environment?: UpdateRobotApplicationRequestBodyEnvironment;
    robotSoftwareSuite: UpdateRobotApplicationRequestBodyRobotSoftwareSuite;
    sources?: shared.SourceConfig[];
}
export declare class UpdateRobotApplicationRequest extends SpeakeasyBase {
    headers: UpdateRobotApplicationHeaders;
    request: UpdateRobotApplicationRequestBody;
}
export declare class UpdateRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateRobotApplicationResponse?: shared.UpdateRobotApplicationResponse;
}
