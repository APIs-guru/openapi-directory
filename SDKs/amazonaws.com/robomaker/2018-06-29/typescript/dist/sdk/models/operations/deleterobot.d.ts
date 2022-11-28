import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRobotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRobotRequestBody extends SpeakeasyBase {
    robot: string;
}
export declare class DeleteRobotRequest extends SpeakeasyBase {
    headers: DeleteRobotHeaders;
    request: DeleteRobotRequestBody;
}
export declare class DeleteRobotResponse extends SpeakeasyBase {
    contentType: string;
    deleteRobotResponse?: Map<string, any>;
    internalServerException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttlingException?: any;
}
