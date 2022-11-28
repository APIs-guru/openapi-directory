import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateGatewayPathParams extends SpeakeasyBase {
    gatewayId: string;
}
export declare class UpdateGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGatewayRequestBody extends SpeakeasyBase {
    gatewayName: string;
}
export declare class UpdateGatewayRequest extends SpeakeasyBase {
    pathParams: UpdateGatewayPathParams;
    headers: UpdateGatewayHeaders;
    request: UpdateGatewayRequestBody;
}
export declare class UpdateGatewayResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
