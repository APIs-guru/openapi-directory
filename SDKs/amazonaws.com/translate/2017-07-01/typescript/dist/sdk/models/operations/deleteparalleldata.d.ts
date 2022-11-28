import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteParallelDataXAmzTargetEnum {
    AwsShineFrontendService20170701DeleteParallelData = "AWSShineFrontendService_20170701.DeleteParallelData"
}
export declare class DeleteParallelDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParallelDataXAmzTargetEnum;
}
export declare class DeleteParallelDataRequest extends SpeakeasyBase {
    headers: DeleteParallelDataHeaders;
    request: shared.DeleteParallelDataRequest;
}
export declare class DeleteParallelDataResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteParallelDataResponse?: shared.DeleteParallelDataResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
