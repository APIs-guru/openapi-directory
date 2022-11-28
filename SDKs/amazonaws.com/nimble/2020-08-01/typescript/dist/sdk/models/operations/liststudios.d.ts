import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStudiosQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListStudiosHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStudiosRequest extends SpeakeasyBase {
    queryParams: ListStudiosQueryParams;
    headers: ListStudiosHeaders;
}
export declare class ListStudiosResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listStudiosResponse?: shared.ListStudiosResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
