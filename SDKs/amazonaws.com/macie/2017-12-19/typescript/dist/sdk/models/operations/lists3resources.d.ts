import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListS3ResourcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListS3ResourcesXAmzTargetEnum {
    MacieServiceListS3Resources = "MacieService.ListS3Resources"
}
export declare class ListS3ResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListS3ResourcesXAmzTargetEnum;
}
export declare class ListS3ResourcesRequest extends SpeakeasyBase {
    queryParams: ListS3ResourcesQueryParams;
    headers: ListS3ResourcesHeaders;
    request: shared.ListS3ResourcesRequest;
}
export declare class ListS3ResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listS3ResourcesResult?: shared.ListS3ResourcesResult;
    statusCode: number;
}
