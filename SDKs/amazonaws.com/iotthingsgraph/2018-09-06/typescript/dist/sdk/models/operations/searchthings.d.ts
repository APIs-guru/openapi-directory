import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchThingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchThingsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchThings = "IotThingsGraphFrontEndService.SearchThings"
}
export declare class SearchThingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchThingsXAmzTargetEnum;
}
export declare class SearchThingsRequest extends SpeakeasyBase {
    queryParams: SearchThingsQueryParams;
    headers: SearchThingsHeaders;
    request: shared.SearchThingsRequest;
}
export declare class SearchThingsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    searchThingsResponse?: shared.SearchThingsResponse;
    statusCode: number;
    throttlingException?: any;
}
