import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchDatabasesByLfTagsXAmzTargetEnum {
    AwsLakeFormationSearchDatabasesByLfTags = "AWSLakeFormation.SearchDatabasesByLFTags"
}
export declare class SearchDatabasesByLfTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchDatabasesByLfTagsXAmzTargetEnum;
}
export declare class SearchDatabasesByLfTagsRequest extends SpeakeasyBase {
    headers: SearchDatabasesByLfTagsHeaders;
    request: shared.SearchDatabasesByLfTagsRequest;
}
export declare class SearchDatabasesByLfTagsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    searchDatabasesByLfTagsResponse?: shared.SearchDatabasesByLfTagsResponse;
    statusCode: number;
}
