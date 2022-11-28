import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCampaignXAmzTargetEnum {
    AmazonPersonalizeUpdateCampaign = "AmazonPersonalize.UpdateCampaign"
}
export declare class UpdateCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCampaignXAmzTargetEnum;
}
export declare class UpdateCampaignRequest extends SpeakeasyBase {
    headers: UpdateCampaignHeaders;
    request: shared.UpdateCampaignRequest;
}
export declare class UpdateCampaignResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateCampaignResponse?: shared.UpdateCampaignResponse;
}
