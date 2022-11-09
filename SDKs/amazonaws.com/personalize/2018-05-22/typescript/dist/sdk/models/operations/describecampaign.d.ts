import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeCampaignXAmzTargetEnum {
    AmazonPersonalizeDescribeCampaign = "AmazonPersonalize.DescribeCampaign"
}
export declare class DescribeCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCampaignXAmzTargetEnum;
}
export declare class DescribeCampaignRequest extends SpeakeasyBase {
    headers: DescribeCampaignHeaders;
    request: shared.DescribeCampaignRequest;
}
export declare class DescribeCampaignResponse extends SpeakeasyBase {
    contentType: string;
    describeCampaignResponse?: shared.DescribeCampaignResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
