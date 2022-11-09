import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteConfigurationSetPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class DeleteConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConfigurationSetRequest extends SpeakeasyBase {
    pathParams: DeleteConfigurationSetPathParams;
    headers: DeleteConfigurationSetHeaders;
}
export declare class DeleteConfigurationSetResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteConfigurationSetResponse?: Map<string, any>;
    internalServiceErrorException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
