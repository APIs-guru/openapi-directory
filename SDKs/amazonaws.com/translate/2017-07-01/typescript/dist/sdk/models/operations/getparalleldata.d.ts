import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetParallelDataXAmzTargetEnum {
    AwsShineFrontendService20170701GetParallelData = "AWSShineFrontendService_20170701.GetParallelData"
}
export declare class GetParallelDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParallelDataXAmzTargetEnum;
}
export declare class GetParallelDataRequest extends SpeakeasyBase {
    headers: GetParallelDataHeaders;
    request: shared.GetParallelDataRequest;
}
export declare class GetParallelDataResponse extends SpeakeasyBase {
    contentType: string;
    getParallelDataResponse?: shared.GetParallelDataResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
