import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAnomalyGroupSummariesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAnomalyGroupSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnomalyGroupSummariesRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    maxResults?: number;
    nextToken?: string;
    sensitivityThreshold: number;
}
export declare class ListAnomalyGroupSummariesRequest extends SpeakeasyBase {
    queryParams: ListAnomalyGroupSummariesQueryParams;
    headers: ListAnomalyGroupSummariesHeaders;
    request: ListAnomalyGroupSummariesRequestBody;
}
export declare class ListAnomalyGroupSummariesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAnomalyGroupSummariesResponse?: shared.ListAnomalyGroupSummariesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
