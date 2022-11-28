import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkerBlocksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWorkerBlocksXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListWorkerBlocks = "MTurkRequesterServiceV20170117.ListWorkerBlocks"
}
export declare class ListWorkerBlocksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkerBlocksXAmzTargetEnum;
}
export declare class ListWorkerBlocksRequest extends SpeakeasyBase {
    queryParams: ListWorkerBlocksQueryParams;
    headers: ListWorkerBlocksHeaders;
    request: shared.ListWorkerBlocksRequest;
}
export declare class ListWorkerBlocksResponse extends SpeakeasyBase {
    contentType: string;
    listWorkerBlocksResponse?: shared.ListWorkerBlocksResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
