import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetSystemInstance = "IotThingsGraphFrontEndService.GetSystemInstance"
}
export declare class GetSystemInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSystemInstanceXAmzTargetEnum;
}
export declare class GetSystemInstanceRequest extends SpeakeasyBase {
    headers: GetSystemInstanceHeaders;
    request: shared.GetSystemInstanceRequest;
}
export declare class GetSystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    getSystemInstanceResponse?: shared.GetSystemInstanceResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
