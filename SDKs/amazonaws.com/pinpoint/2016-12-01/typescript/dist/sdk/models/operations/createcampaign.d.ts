import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCampaignPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateCampaignHeaders extends SpeakeasyBase {
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
export declare class CreateCampaignRequestBodyWriteCampaignRequest extends SpeakeasyBase {
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
export declare class CreateCampaignRequestBody extends SpeakeasyBase {
    writeCampaignRequest: CreateCampaignRequestBodyWriteCampaignRequest;
}
export declare class CreateCampaignRequest extends SpeakeasyBase {
    pathParams: CreateCampaignPathParams;
    headers: CreateCampaignHeaders;
    request: CreateCampaignRequestBody;
}
export declare class CreateCampaignResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createCampaignResponse?: shared.CreateCampaignResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
