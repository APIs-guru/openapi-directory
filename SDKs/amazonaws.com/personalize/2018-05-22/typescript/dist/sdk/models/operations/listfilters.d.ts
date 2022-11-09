import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFiltersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFiltersXAmzTargetEnum {
    AmazonPersonalizeListFilters = "AmazonPersonalize.ListFilters"
}
export declare class ListFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFiltersXAmzTargetEnum;
}
export declare class ListFiltersRequest extends SpeakeasyBase {
    queryParams: ListFiltersQueryParams;
    headers: ListFiltersHeaders;
    request: shared.ListFiltersRequest;
}
export declare class ListFiltersResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listFiltersResponse?: shared.ListFiltersResponse;
    statusCode: number;
}
