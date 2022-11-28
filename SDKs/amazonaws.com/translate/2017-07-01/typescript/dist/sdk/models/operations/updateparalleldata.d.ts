import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateParallelDataXAmzTargetEnum {
    AwsShineFrontendService20170701UpdateParallelData = "AWSShineFrontendService_20170701.UpdateParallelData"
}
export declare class UpdateParallelDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateParallelDataXAmzTargetEnum;
}
export declare class UpdateParallelDataRequest extends SpeakeasyBase {
    headers: UpdateParallelDataHeaders;
    request: shared.UpdateParallelDataRequest;
}
export declare class UpdateParallelDataResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    invalidParameterValueException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateParallelDataResponse?: shared.UpdateParallelDataResponse;
}
