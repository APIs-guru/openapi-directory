import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLfTagsXAmzTargetEnum {
    AwsLakeFormationListLfTags = "AWSLakeFormation.ListLFTags"
}
export declare class ListLfTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLfTagsXAmzTargetEnum;
}
export declare class ListLfTagsRequest extends SpeakeasyBase {
    headers: ListLfTagsHeaders;
    request: shared.ListLfTagsRequest;
}
export declare class ListLfTagsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    listLfTagsResponse?: shared.ListLfTagsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
