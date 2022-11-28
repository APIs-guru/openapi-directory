import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies criteria for sorting the results of a request for findings.
**/
export declare class GetFindingsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: string;
    orderBy?: shared.OrderByEnum;
}
export declare class GetFindingsRequestBody extends SpeakeasyBase {
    findingIds: string[];
    sortCriteria?: GetFindingsRequestBodySortCriteria;
}
export declare class GetFindingsRequest extends SpeakeasyBase {
    headers: GetFindingsHeaders;
    request: GetFindingsRequestBody;
}
export declare class GetFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getFindingsResponse?: shared.GetFindingsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
