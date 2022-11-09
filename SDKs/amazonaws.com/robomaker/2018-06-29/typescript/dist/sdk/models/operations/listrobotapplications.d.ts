import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRobotApplicationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListRobotApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRobotApplicationsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
    versionQualifier?: string;
}
export declare class ListRobotApplicationsRequest extends SpeakeasyBase {
    queryParams: ListRobotApplicationsQueryParams;
    headers: ListRobotApplicationsHeaders;
    request: ListRobotApplicationsRequestBody;
}
export declare class ListRobotApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listRobotApplicationsResponse?: shared.ListRobotApplicationsResponse;
    statusCode: number;
    throttlingException?: any;
}
