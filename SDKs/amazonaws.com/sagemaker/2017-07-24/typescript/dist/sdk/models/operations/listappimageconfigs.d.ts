import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAppImageConfigsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAppImageConfigsXAmzTargetEnum {
    SageMakerListAppImageConfigs = "SageMaker.ListAppImageConfigs"
}
export declare class ListAppImageConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAppImageConfigsXAmzTargetEnum;
}
export declare class ListAppImageConfigsRequest extends SpeakeasyBase {
    queryParams: ListAppImageConfigsQueryParams;
    headers: ListAppImageConfigsHeaders;
    request: shared.ListAppImageConfigsRequest;
}
export declare class ListAppImageConfigsResponse extends SpeakeasyBase {
    contentType: string;
    listAppImageConfigsResponse?: shared.ListAppImageConfigsResponse;
    statusCode: number;
}
