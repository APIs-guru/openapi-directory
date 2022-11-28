import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApplicationSettingsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateApplicationSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the default settings for an application.
**/
export declare class UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest extends SpeakeasyBase {
    campaignHook?: shared.CampaignHook;
    cloudWatchMetricsEnabled?: boolean;
    eventTaggingEnabled?: boolean;
    limits?: shared.CampaignLimits;
    quietTime?: shared.QuietTime;
}
export declare class UpdateApplicationSettingsRequestBody extends SpeakeasyBase {
    writeApplicationSettingsRequest: UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest;
}
export declare class UpdateApplicationSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateApplicationSettingsPathParams;
    headers: UpdateApplicationSettingsHeaders;
    request: UpdateApplicationSettingsRequestBody;
}
export declare class UpdateApplicationSettingsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateApplicationSettingsResponse?: shared.UpdateApplicationSettingsResponse;
}
