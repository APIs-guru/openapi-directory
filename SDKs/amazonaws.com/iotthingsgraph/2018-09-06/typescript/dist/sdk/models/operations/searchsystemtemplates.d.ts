import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchSystemTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchSystemTemplatesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchSystemTemplates = "IotThingsGraphFrontEndService.SearchSystemTemplates"
}
export declare class SearchSystemTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchSystemTemplatesXAmzTargetEnum;
}
export declare class SearchSystemTemplatesRequest extends SpeakeasyBase {
    queryParams: SearchSystemTemplatesQueryParams;
    headers: SearchSystemTemplatesHeaders;
    request: shared.SearchSystemTemplatesRequest;
}
export declare class SearchSystemTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    searchSystemTemplatesResponse?: shared.SearchSystemTemplatesResponse;
    statusCode: number;
    throttlingException?: any;
}
