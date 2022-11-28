import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateActionTargetPathParams extends SpeakeasyBase {
    actionTargetArn: string;
}
export declare class UpdateActionTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateActionTargetRequestBody extends SpeakeasyBase {
    description?: string;
    name?: string;
}
export declare class UpdateActionTargetRequest extends SpeakeasyBase {
    pathParams: UpdateActionTargetPathParams;
    headers: UpdateActionTargetHeaders;
    request: UpdateActionTargetRequestBody;
}
export declare class UpdateActionTargetResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateActionTargetResponse?: Map<string, any>;
}
