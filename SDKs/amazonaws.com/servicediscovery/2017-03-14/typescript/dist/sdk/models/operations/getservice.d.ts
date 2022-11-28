import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetServiceXAmzTargetEnum {
    Route53AutoNamingV20170314GetService = "Route53AutoNaming_v20170314.GetService"
}
export declare class GetServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceXAmzTargetEnum;
}
export declare class GetServiceRequest extends SpeakeasyBase {
    headers: GetServiceHeaders;
    request: shared.GetServiceRequest;
}
export declare class GetServiceResponse extends SpeakeasyBase {
    contentType: string;
    getServiceResponse?: shared.GetServiceResponse;
    invalidInput?: any;
    serviceNotFound?: any;
    statusCode: number;
}
