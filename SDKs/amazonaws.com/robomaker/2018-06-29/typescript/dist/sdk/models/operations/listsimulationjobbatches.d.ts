import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSimulationJobBatchesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSimulationJobBatchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSimulationJobBatchesRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListSimulationJobBatchesRequest extends SpeakeasyBase {
    queryParams: ListSimulationJobBatchesQueryParams;
    headers: ListSimulationJobBatchesHeaders;
    request: ListSimulationJobBatchesRequestBody;
}
export declare class ListSimulationJobBatchesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listSimulationJobBatchesResponse?: shared.ListSimulationJobBatchesResponse;
    statusCode: number;
}
