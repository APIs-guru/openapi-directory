import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAlertHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAlertRequestBody extends SpeakeasyBase {
    alertArn: string;
}
export declare class DeleteAlertRequest extends SpeakeasyBase {
    headers: DeleteAlertHeaders;
    request: DeleteAlertRequestBody;
}
export declare class DeleteAlertResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteAlertResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
