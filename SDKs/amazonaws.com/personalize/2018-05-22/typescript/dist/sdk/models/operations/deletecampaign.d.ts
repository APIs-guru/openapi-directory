import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCampaignXAmzTargetEnum {
    AmazonPersonalizeDeleteCampaign = "AmazonPersonalize.DeleteCampaign"
}
export declare class DeleteCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCampaignXAmzTargetEnum;
}
export declare class DeleteCampaignRequest extends SpeakeasyBase {
    headers: DeleteCampaignHeaders;
    request: shared.DeleteCampaignRequest;
}
export declare class DeleteCampaignResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
