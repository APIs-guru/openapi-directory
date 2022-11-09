import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateConfigurationSetRequestBody extends SpeakeasyBase {
    configurationSetName?: string;
}
export declare class CreateConfigurationSetRequest extends SpeakeasyBase {
    headers: CreateConfigurationSetHeaders;
    request: CreateConfigurationSetRequestBody;
}
export declare class CreateConfigurationSetResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    createConfigurationSetResponse?: Map<string, any>;
    internalServiceErrorException?: any;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
