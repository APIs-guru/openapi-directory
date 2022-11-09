import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteHumanLoopPathParams extends SpeakeasyBase {
    humanLoopName: string;
}
export declare class DeleteHumanLoopHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteHumanLoopRequest extends SpeakeasyBase {
    pathParams: DeleteHumanLoopPathParams;
    headers: DeleteHumanLoopHeaders;
}
export declare class DeleteHumanLoopResponse extends SpeakeasyBase {
    contentType: string;
    deleteHumanLoopResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
