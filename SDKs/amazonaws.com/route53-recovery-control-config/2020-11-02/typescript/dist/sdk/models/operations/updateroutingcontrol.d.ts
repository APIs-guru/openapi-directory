import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoutingControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRoutingControlRequestBody extends SpeakeasyBase {
    routingControlArn: string;
    routingControlName: string;
}
export declare class UpdateRoutingControlRequest extends SpeakeasyBase {
    headers: UpdateRoutingControlHeaders;
    request: UpdateRoutingControlRequestBody;
}
export declare class UpdateRoutingControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateRoutingControlResponse?: shared.UpdateRoutingControlResponse;
    validationException?: any;
}
