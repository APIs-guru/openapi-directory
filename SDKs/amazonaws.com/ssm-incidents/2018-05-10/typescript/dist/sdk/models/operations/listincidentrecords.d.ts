import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListIncidentRecordsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListIncidentRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListIncidentRecordsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListIncidentRecordsRequest extends SpeakeasyBase {
    queryParams: ListIncidentRecordsQueryParams;
    headers: ListIncidentRecordsHeaders;
    request: ListIncidentRecordsRequestBody;
}
export declare class ListIncidentRecordsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listIncidentRecordsOutput?: shared.ListIncidentRecordsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
