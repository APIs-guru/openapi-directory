import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateGatewayCapabilityConfigurationPathParams extends SpeakeasyBase {
    gatewayId: string;
}
export declare class UpdateGatewayCapabilityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGatewayCapabilityConfigurationRequestBody extends SpeakeasyBase {
    capabilityConfiguration: string;
    capabilityNamespace: string;
}
export declare class UpdateGatewayCapabilityConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateGatewayCapabilityConfigurationPathParams;
    headers: UpdateGatewayCapabilityConfigurationHeaders;
    request: UpdateGatewayCapabilityConfigurationRequestBody;
}
export declare class UpdateGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateGatewayCapabilityConfigurationResponse?: shared.UpdateGatewayCapabilityConfigurationResponse;
}
