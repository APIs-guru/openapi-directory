import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImageVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListImageVersionsXAmzTargetEnum {
    SageMakerListImageVersions = "SageMaker.ListImageVersions"
}
export declare class ListImageVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListImageVersionsXAmzTargetEnum;
}
export declare class ListImageVersionsRequest extends SpeakeasyBase {
    queryParams: ListImageVersionsQueryParams;
    headers: ListImageVersionsHeaders;
    request: shared.ListImageVersionsRequest;
}
export declare class ListImageVersionsResponse extends SpeakeasyBase {
    contentType: string;
    listImageVersionsResponse?: shared.ListImageVersionsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
