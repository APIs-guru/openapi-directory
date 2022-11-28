import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRobotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateRobotRequestBodyArchitectureEnum {
    X8664 = "X86_64",
    Arm64 = "ARM64",
    Armhf = "ARMHF"
}
export declare class CreateRobotRequestBody extends SpeakeasyBase {
    architecture: CreateRobotRequestBodyArchitectureEnum;
    greengrassGroupId: string;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateRobotRequest extends SpeakeasyBase {
    headers: CreateRobotHeaders;
    request: CreateRobotRequestBody;
}
export declare class CreateRobotResponse extends SpeakeasyBase {
    contentType: string;
    createRobotResponse?: shared.CreateRobotResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
