import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteConfigurationSetEventDestinationPathParams extends SpeakeasyBase {
    configurationSetName: string;
    eventDestinationName: string;
}
export declare class DeleteConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    pathParams: DeleteConfigurationSetEventDestinationPathParams;
    headers: DeleteConfigurationSetEventDestinationHeaders;
}
export declare class DeleteConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteConfigurationSetEventDestinationResponse?: Map<string, any>;
    internalServiceErrorException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
