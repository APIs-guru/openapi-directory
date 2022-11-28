import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutConfigurationSetSendingOptionsPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class PutConfigurationSetSendingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetSendingOptionsRequestBody extends SpeakeasyBase {
    sendingEnabled?: boolean;
}
export declare class PutConfigurationSetSendingOptionsRequest extends SpeakeasyBase {
    pathParams: PutConfigurationSetSendingOptionsPathParams;
    headers: PutConfigurationSetSendingOptionsHeaders;
    request: PutConfigurationSetSendingOptionsRequestBody;
}
export declare class PutConfigurationSetSendingOptionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putConfigurationSetSendingOptionsResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
