import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMembersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    onlyAssociated?: boolean;
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
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    listMembersResponse?: shared.ListMembersResponse;
    statusCode: number;
}
