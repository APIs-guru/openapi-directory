import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateRoutingControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRoutingControlRequestBody extends SpeakeasyBase {
    clientToken?: string;
    clusterArn: string;
    controlPanelArn?: string;
    routingControlName: string;
}
export declare class CreateRoutingControlRequest extends SpeakeasyBase {
    headers: CreateRoutingControlHeaders;
    request: CreateRoutingControlRequestBody;
}
export declare class CreateRoutingControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createRoutingControlResponse?: shared.CreateRoutingControlResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
