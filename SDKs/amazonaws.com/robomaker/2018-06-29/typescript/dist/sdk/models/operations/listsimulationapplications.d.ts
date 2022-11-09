import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSimulationApplicationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSimulationApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSimulationApplicationsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
    versionQualifier?: string;
}
export declare class ListSimulationApplicationsRequest extends SpeakeasyBase {
    queryParams: ListSimulationApplicationsQueryParams;
    headers: ListSimulationApplicationsHeaders;
    request: ListSimulationApplicationsRequestBody;
}
export declare class ListSimulationApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listSimulationApplicationsResponse?: shared.ListSimulationApplicationsResponse;
    statusCode: number;
    throttlingException?: any;
}
