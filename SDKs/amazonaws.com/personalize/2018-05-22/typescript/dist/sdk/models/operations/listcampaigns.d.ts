import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCampaignsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCampaignsXAmzTargetEnum {
    AmazonPersonalizeListCampaigns = "AmazonPersonalize.ListCampaigns"
}
export declare class ListCampaignsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCampaignsXAmzTargetEnum;
}
export declare class ListCampaignsRequest extends SpeakeasyBase {
    queryParams: ListCampaignsQueryParams;
    headers: ListCampaignsHeaders;
    request: shared.ListCampaignsRequest;
}
export declare class ListCampaignsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listCampaignsResponse?: shared.ListCampaignsResponse;
    statusCode: number;
}
