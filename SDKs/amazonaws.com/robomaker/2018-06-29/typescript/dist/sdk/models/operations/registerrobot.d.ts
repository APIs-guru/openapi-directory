import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterRobotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterRobotRequestBody extends SpeakeasyBase {
    fleet: string;
    robot: string;
}
export declare class RegisterRobotRequest extends SpeakeasyBase {
    headers: RegisterRobotHeaders;
    request: RegisterRobotRequestBody;
}
export declare class RegisterRobotResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    registerRobotResponse?: shared.RegisterRobotResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
