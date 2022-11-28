import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRobotApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRobotApplicationRequestBody extends SpeakeasyBase {
    application: string;
    applicationVersion?: string;
}
export declare class DeleteRobotApplicationRequest extends SpeakeasyBase {
    headers: DeleteRobotApplicationHeaders;
    request: DeleteRobotApplicationRequestBody;
}
export declare class DeleteRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    deleteRobotApplicationResponse?: Map<string, any>;
    internalServerException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttlingException?: any;
}
