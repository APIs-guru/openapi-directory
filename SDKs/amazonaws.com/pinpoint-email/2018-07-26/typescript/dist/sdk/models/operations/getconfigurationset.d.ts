import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConfigurationSetPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class GetConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConfigurationSetRequest extends SpeakeasyBase {
    pathParams: GetConfigurationSetPathParams;
    headers: GetConfigurationSetHeaders;
}
export declare class GetConfigurationSetResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getConfigurationSetResponse?: shared.GetConfigurationSetResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
