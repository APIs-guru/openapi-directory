import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutConfigurationSetReputationOptionsPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class PutConfigurationSetReputationOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetReputationOptionsRequestBody extends SpeakeasyBase {
    reputationMetricsEnabled?: boolean;
}
export declare class PutConfigurationSetReputationOptionsRequest extends SpeakeasyBase {
    pathParams: PutConfigurationSetReputationOptionsPathParams;
    headers: PutConfigurationSetReputationOptionsHeaders;
    request: PutConfigurationSetReputationOptionsRequestBody;
}
export declare class PutConfigurationSetReputationOptionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putConfigurationSetReputationOptionsResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
