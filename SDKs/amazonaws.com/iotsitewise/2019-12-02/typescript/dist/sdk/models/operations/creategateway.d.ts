import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains a gateway's platform information.
**/
export declare class CreateGatewayRequestBodyGatewayPlatform extends SpeakeasyBase {
    greengrass?: shared.Greengrass;
    greengrassV2?: shared.GreengrassV2;
}
export declare class CreateGatewayRequestBody extends SpeakeasyBase {
    gatewayName: string;
    gatewayPlatform: CreateGatewayRequestBodyGatewayPlatform;
    tags?: Map<string, string>;
}
export declare class CreateGatewayRequest extends SpeakeasyBase {
    headers: CreateGatewayHeaders;
    request: CreateGatewayRequestBody;
}
export declare class CreateGatewayResponse extends SpeakeasyBase {
    contentType: string;
    createGatewayResponse?: shared.CreateGatewayResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
