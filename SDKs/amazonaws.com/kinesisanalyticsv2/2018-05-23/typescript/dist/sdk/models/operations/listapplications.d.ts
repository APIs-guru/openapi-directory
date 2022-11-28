import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListApplicationsXAmzTargetEnum {
    KinesisAnalytics20180523ListApplications = "KinesisAnalytics_20180523.ListApplications"
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
    invalidRequestException?: any;
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
}
