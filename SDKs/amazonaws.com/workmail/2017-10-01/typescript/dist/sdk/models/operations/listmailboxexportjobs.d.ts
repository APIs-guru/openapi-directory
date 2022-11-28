import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMailboxExportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMailboxExportJobsXAmzTargetEnum {
    WorkMailServiceListMailboxExportJobs = "WorkMailService.ListMailboxExportJobs"
}
export declare class ListMailboxExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMailboxExportJobsXAmzTargetEnum;
}
export declare class ListMailboxExportJobsRequest extends SpeakeasyBase {
    queryParams: ListMailboxExportJobsQueryParams;
    headers: ListMailboxExportJobsHeaders;
    request: shared.ListMailboxExportJobsRequest;
}
export declare class ListMailboxExportJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    listMailboxExportJobsResponse?: shared.ListMailboxExportJobsResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
