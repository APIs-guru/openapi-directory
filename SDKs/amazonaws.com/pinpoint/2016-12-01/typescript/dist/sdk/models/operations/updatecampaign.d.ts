import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCampaignPathParams extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
}
export declare class UpdateCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the configuration and other settings for a campaign.
**/
export declare class UpdateCampaignRequestBodyWriteCampaignRequest extends SpeakeasyBase {
    additionalTreatments?: shared.WriteTreatmentResource[];
    customDeliveryConfiguration?: shared.CustomDeliveryConfiguration;
    description?: string;
    holdoutPercent?: number;
    hook?: shared.CampaignHook;
    isPaused?: boolean;
    limits?: shared.CampaignLimits;
    messageConfiguration?: shared.MessageConfiguration;
    name?: string;
    priority?: number;
    schedule?: shared.Schedule;
    segmentId?: string;
    segmentVersion?: number;
    templateConfiguration?: shared.TemplateConfiguration;
    treatmentDescription?: string;
    treatmentName?: string;
    tags?: Map<string, string>;
}
export declare class UpdateCampaignRequestBody extends SpeakeasyBase {
    writeCampaignRequest: UpdateCampaignRequestBodyWriteCampaignRequest;
}
export declare class UpdateCampaignRequest extends SpeakeasyBase {
    pathParams: UpdateCampaignPathParams;
    headers: UpdateCampaignHeaders;
    request: UpdateCampaignRequestBody;
}
export declare class UpdateCampaignResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateCampaignResponse?: shared.UpdateCampaignResponse;
}
