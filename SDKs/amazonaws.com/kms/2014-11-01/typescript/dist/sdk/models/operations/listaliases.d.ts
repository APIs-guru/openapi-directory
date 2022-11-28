import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAliasesQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare enum ListAliasesXAmzTargetEnum {
    TrentServiceListAliases = "TrentService.ListAliases"
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
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    invalidMarkerException?: any;
    kmsInternalException?: any;
    listAliasesResponse?: shared.ListAliasesResponse;
    notFoundException?: any;
    statusCode: number;
}
