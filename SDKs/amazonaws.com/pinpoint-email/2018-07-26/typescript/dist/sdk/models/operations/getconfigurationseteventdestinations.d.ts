import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConfigurationSetEventDestinationsPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class GetConfigurationSetEventDestinationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConfigurationSetEventDestinationsRequest extends SpeakeasyBase {
    pathParams: GetConfigurationSetEventDestinationsPathParams;
    headers: GetConfigurationSetEventDestinationsHeaders;
}
export declare class GetConfigurationSetEventDestinationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getConfigurationSetEventDestinationsResponse?: shared.GetConfigurationSetEventDestinationsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
