import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAnomalyDetectorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAnomalyDetectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnomalyDetectorsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAnomalyDetectorsRequest extends SpeakeasyBase {
    queryParams: ListAnomalyDetectorsQueryParams;
    headers: ListAnomalyDetectorsHeaders;
    request: ListAnomalyDetectorsRequestBody;
}
export declare class ListAnomalyDetectorsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAnomalyDetectorsResponse?: shared.ListAnomalyDetectorsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
