import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetInstanceXAmzTargetEnum {
    Route53AutoNamingV20170314GetInstance = "Route53AutoNaming_v20170314.GetInstance"
}
export declare class GetInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceXAmzTargetEnum;
}
export declare class GetInstanceRequest extends SpeakeasyBase {
    headers: GetInstanceHeaders;
    request: shared.GetInstanceRequest;
}
export declare class GetInstanceResponse extends SpeakeasyBase {
    contentType: string;
    getInstanceResponse?: shared.GetInstanceResponse;
    instanceNotFound?: any;
    invalidInput?: any;
    serviceNotFound?: any;
    statusCode: number;
}
