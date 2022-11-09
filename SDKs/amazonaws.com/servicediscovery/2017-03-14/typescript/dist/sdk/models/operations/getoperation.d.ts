import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetOperationXAmzTargetEnum {
    Route53AutoNamingV20170314GetOperation = "Route53AutoNaming_v20170314.GetOperation"
}
export declare class GetOperationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOperationXAmzTargetEnum;
}
export declare class GetOperationRequest extends SpeakeasyBase {
    headers: GetOperationHeaders;
    request: shared.GetOperationRequest;
}
export declare class GetOperationResponse extends SpeakeasyBase {
    contentType: string;
    getOperationResponse?: shared.GetOperationResponse;
    invalidInput?: any;
    operationNotFound?: any;
    statusCode: number;
}
