import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMembersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    onlyAssociated?: string;
}
export declare class ListMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMembersRequest extends SpeakeasyBase {
    queryParams: ListMembersQueryParams;
    headers: ListMembersHeaders;
}
export declare class ListMembersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listMembersResponse?: shared.ListMembersResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
