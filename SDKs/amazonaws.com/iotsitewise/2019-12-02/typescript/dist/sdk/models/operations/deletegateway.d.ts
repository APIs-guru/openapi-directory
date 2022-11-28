import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGatewayPathParams extends SpeakeasyBase {
    gatewayId: string;
}
export declare class DeleteGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGatewayRequest extends SpeakeasyBase {
    pathParams: DeleteGatewayPathParams;
    headers: DeleteGatewayHeaders;
}
export declare class DeleteGatewayResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
