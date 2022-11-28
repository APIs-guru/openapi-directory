import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterInstanceXAmzTargetEnum {
    Route53AutoNamingV20170314DeregisterInstance = "Route53AutoNaming_v20170314.DeregisterInstance"
}
export declare class DeregisterInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterInstanceXAmzTargetEnum;
}
export declare class DeregisterInstanceRequest extends SpeakeasyBase {
    headers: DeregisterInstanceHeaders;
    request: shared.DeregisterInstanceRequest;
}
export declare class DeregisterInstanceResponse extends SpeakeasyBase {
    contentType: string;
    deregisterInstanceResponse?: shared.DeregisterInstanceResponse;
    duplicateRequest?: any;
    instanceNotFound?: any;
    invalidInput?: any;
    resourceInUse?: any;
    serviceNotFound?: any;
    statusCode: number;
}
