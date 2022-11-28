import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAlertsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAlertsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAlertsRequestBody extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAlertsRequest extends SpeakeasyBase {
    queryParams: ListAlertsQueryParams;
    headers: ListAlertsHeaders;
    request: ListAlertsRequestBody;
}
export declare class ListAlertsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAlertsResponse?: shared.ListAlertsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
