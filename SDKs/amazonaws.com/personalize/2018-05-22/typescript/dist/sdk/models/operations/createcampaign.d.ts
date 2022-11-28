import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCampaignXAmzTargetEnum {
    AmazonPersonalizeCreateCampaign = "AmazonPersonalize.CreateCampaign"
}
export declare class CreateCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCampaignXAmzTargetEnum;
}
export declare class CreateCampaignRequest extends SpeakeasyBase {
    headers: CreateCampaignHeaders;
    request: shared.CreateCampaignRequest;
}
export declare class CreateCampaignResponse extends SpeakeasyBase {
    contentType: string;
    createCampaignResponse?: shared.CreateCampaignResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
