import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutConfigurationSetDeliveryOptionsPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class PutConfigurationSetDeliveryOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum {
    Require = "REQUIRE",
    Optional = "OPTIONAL"
}
export declare class PutConfigurationSetDeliveryOptionsRequestBody extends SpeakeasyBase {
    sendingPoolName?: string;
    tlsPolicy?: PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum;
}
export declare class PutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
    pathParams: PutConfigurationSetDeliveryOptionsPathParams;
    headers: PutConfigurationSetDeliveryOptionsHeaders;
    request: PutConfigurationSetDeliveryOptionsRequestBody;
}
export declare class PutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putConfigurationSetDeliveryOptionsResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
