import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEulaAcceptancesPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class ListEulaAcceptancesQueryParams extends SpeakeasyBase {
    eulaIds?: string[];
    nextToken?: string;
}
export declare class ListEulaAcceptancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEulaAcceptancesRequest extends SpeakeasyBase {
    pathParams: ListEulaAcceptancesPathParams;
    queryParams: ListEulaAcceptancesQueryParams;
    headers: ListEulaAcceptancesHeaders;
}
export declare class ListEulaAcceptancesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listEulaAcceptancesResponse?: shared.ListEulaAcceptancesResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
