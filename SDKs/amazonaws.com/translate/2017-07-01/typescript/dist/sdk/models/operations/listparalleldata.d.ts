import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListParallelDataQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListParallelDataXAmzTargetEnum {
    AwsShineFrontendService20170701ListParallelData = "AWSShineFrontendService_20170701.ListParallelData"
}
export declare class ListParallelDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListParallelDataXAmzTargetEnum;
}
export declare class ListParallelDataRequest extends SpeakeasyBase {
    queryParams: ListParallelDataQueryParams;
    headers: ListParallelDataHeaders;
    request: shared.ListParallelDataRequest;
}
export declare class ListParallelDataResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterValueException?: any;
    listParallelDataResponse?: shared.ListParallelDataResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
