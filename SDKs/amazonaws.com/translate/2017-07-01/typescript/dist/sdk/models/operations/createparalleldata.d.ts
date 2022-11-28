import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateParallelDataXAmzTargetEnum {
    AwsShineFrontendService20170701CreateParallelData = "AWSShineFrontendService_20170701.CreateParallelData"
}
export declare class CreateParallelDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateParallelDataXAmzTargetEnum;
}
export declare class CreateParallelDataRequest extends SpeakeasyBase {
    headers: CreateParallelDataHeaders;
    request: shared.CreateParallelDataRequest;
}
export declare class CreateParallelDataResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createParallelDataResponse?: shared.CreateParallelDataResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
