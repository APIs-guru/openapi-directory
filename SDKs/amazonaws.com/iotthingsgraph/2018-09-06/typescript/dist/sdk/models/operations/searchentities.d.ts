import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchEntitiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchEntitiesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchEntities = "IotThingsGraphFrontEndService.SearchEntities"
}
export declare class SearchEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchEntitiesXAmzTargetEnum;
}
export declare class SearchEntitiesRequest extends SpeakeasyBase {
    queryParams: SearchEntitiesQueryParams;
    headers: SearchEntitiesHeaders;
    request: shared.SearchEntitiesRequest;
}
export declare class SearchEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    searchEntitiesResponse?: shared.SearchEntitiesResponse;
    statusCode: number;
    throttlingException?: any;
}
