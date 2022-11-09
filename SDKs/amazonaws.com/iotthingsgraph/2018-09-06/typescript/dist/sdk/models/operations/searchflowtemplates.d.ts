import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchFlowTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchFlowTemplatesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchFlowTemplates = "IotThingsGraphFrontEndService.SearchFlowTemplates"
}
export declare class SearchFlowTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchFlowTemplatesXAmzTargetEnum;
}
export declare class SearchFlowTemplatesRequest extends SpeakeasyBase {
    queryParams: SearchFlowTemplatesQueryParams;
    headers: SearchFlowTemplatesHeaders;
    request: shared.SearchFlowTemplatesRequest;
}
export declare class SearchFlowTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    searchFlowTemplatesResponse?: shared.SearchFlowTemplatesResponse;
    statusCode: number;
    throttlingException?: any;
}
