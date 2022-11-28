import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateInstanceCustomHealthStatusXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateInstanceCustomHealthStatus = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"
}
export declare class UpdateInstanceCustomHealthStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceCustomHealthStatusXAmzTargetEnum;
}
export declare class UpdateInstanceCustomHealthStatusRequest extends SpeakeasyBase {
    headers: UpdateInstanceCustomHealthStatusHeaders;
    request: shared.UpdateInstanceCustomHealthStatusRequest;
}
export declare class UpdateInstanceCustomHealthStatusResponse extends SpeakeasyBase {
    contentType: string;
    customHealthNotFound?: any;
    instanceNotFound?: any;
    invalidInput?: any;
    serviceNotFound?: any;
    statusCode: number;
}
