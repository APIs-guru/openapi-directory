import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEulasQueryParams extends SpeakeasyBase {
    eulaIds?: string[];
    nextToken?: string;
}
export declare class ListEulasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEulasRequest extends SpeakeasyBase {
    queryParams: ListEulasQueryParams;
    headers: ListEulasHeaders;
}
export declare class ListEulasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listEulasResponse?: shared.ListEulasResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
