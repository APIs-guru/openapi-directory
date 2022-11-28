import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListClusterJobsXAmzTargetEnum {
    AwsieSnowballJobManagementServiceListClusterJobs = "AWSIESnowballJobManagementService.ListClusterJobs"
}
export declare class ListClusterJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListClusterJobsXAmzTargetEnum;
}
export declare class ListClusterJobsRequest extends SpeakeasyBase {
    headers: ListClusterJobsHeaders;
    request: shared.ListClusterJobsRequest;
}
export declare class ListClusterJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidResourceException?: any;
    listClusterJobsResult?: shared.ListClusterJobsResult;
    statusCode: number;
}
