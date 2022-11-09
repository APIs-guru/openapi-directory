import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeregisterRobotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterRobotRequestBody extends SpeakeasyBase {
    fleet: string;
    robot: string;
}
export declare class DeregisterRobotRequest extends SpeakeasyBase {
    headers: DeregisterRobotHeaders;
    request: DeregisterRobotRequestBody;
}
export declare class DeregisterRobotResponse extends SpeakeasyBase {
    contentType: string;
    deregisterRobotResponse?: shared.DeregisterRobotResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
