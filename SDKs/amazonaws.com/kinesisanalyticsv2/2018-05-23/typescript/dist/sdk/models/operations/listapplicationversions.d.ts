import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListApplicationVersionsXAmzTargetEnum {
    KinesisAnalytics20180523ListApplicationVersions = "KinesisAnalytics_20180523.ListApplicationVersions"
}
export declare class ListApplicationVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationVersionsXAmzTargetEnum;
}
export declare class ListApplicationVersionsRequest extends SpeakeasyBase {
    headers: ListApplicationVersionsHeaders;
    request: shared.ListApplicationVersionsRequest;
}
export declare class ListApplicationVersionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    listApplicationVersionsResponse?: shared.ListApplicationVersionsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
