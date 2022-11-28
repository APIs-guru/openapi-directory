import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListApplicationsXAmzTargetEnum {
    KinesisAnalytics20150814ListApplications = "KinesisAnalytics_20150814.ListApplications"
}
export declare class ListApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationsXAmzTargetEnum;
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    headers: ListApplicationsHeaders;
    request: shared.ListApplicationsRequest;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
}
