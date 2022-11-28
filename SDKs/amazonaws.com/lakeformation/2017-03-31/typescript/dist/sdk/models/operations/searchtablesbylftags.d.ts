import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchTablesByLfTagsXAmzTargetEnum {
    AwsLakeFormationSearchTablesByLfTags = "AWSLakeFormation.SearchTablesByLFTags"
}
export declare class SearchTablesByLfTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchTablesByLfTagsXAmzTargetEnum;
}
export declare class SearchTablesByLfTagsRequest extends SpeakeasyBase {
    headers: SearchTablesByLfTagsHeaders;
    request: shared.SearchTablesByLfTagsRequest;
}
export declare class SearchTablesByLfTagsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    searchTablesByLfTagsResponse?: shared.SearchTablesByLfTagsResponse;
    statusCode: number;
}
