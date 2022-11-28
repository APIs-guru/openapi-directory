import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAliasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAliasesXAmzTargetEnum {
    WorkMailServiceListAliases = "WorkMailService.ListAliases"
}
export declare class ListAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAliasesXAmzTargetEnum;
}
export declare class ListAliasesRequest extends SpeakeasyBase {
    queryParams: ListAliasesQueryParams;
    headers: ListAliasesHeaders;
    request: shared.ListAliasesRequest;
}
export declare class ListAliasesResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    listAliasesResponse?: shared.ListAliasesResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
