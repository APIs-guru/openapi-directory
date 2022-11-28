import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAppsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAppsXAmzTargetEnum {
    SageMakerListApps = "SageMaker.ListApps"
}
export declare class ListAppsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAppsXAmzTargetEnum;
}
export declare class ListAppsRequest extends SpeakeasyBase {
    queryParams: ListAppsQueryParams;
    headers: ListAppsHeaders;
    request: shared.ListAppsRequest;
}
export declare class ListAppsResponse extends SpeakeasyBase {
    contentType: string;
    listAppsResponse?: shared.ListAppsResponse;
    statusCode: number;
}
