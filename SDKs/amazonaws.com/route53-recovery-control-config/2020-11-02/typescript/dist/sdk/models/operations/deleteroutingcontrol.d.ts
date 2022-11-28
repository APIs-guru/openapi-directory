import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRoutingControlPathParams extends SpeakeasyBase {
    routingControlArn: string;
}
export declare class DeleteRoutingControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRoutingControlRequest extends SpeakeasyBase {
    pathParams: DeleteRoutingControlPathParams;
    headers: DeleteRoutingControlHeaders;
}
export declare class DeleteRoutingControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteRoutingControlResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
