import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCampaignPathParams extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
}
export declare class DeleteCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCampaignRequest extends SpeakeasyBase {
    pathParams: DeleteCampaignPathParams;
    headers: DeleteCampaignHeaders;
}
export declare class DeleteCampaignResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteCampaignResponse?: shared.DeleteCampaignResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
