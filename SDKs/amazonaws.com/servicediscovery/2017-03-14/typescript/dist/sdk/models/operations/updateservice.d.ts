import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServiceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateService = "Route53AutoNaming_v20170314.UpdateService"
}
export declare class UpdateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceXAmzTargetEnum;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    headers: UpdateServiceHeaders;
    request: shared.UpdateServiceRequest;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    serviceNotFound?: any;
    statusCode: number;
    updateServiceResponse?: shared.UpdateServiceResponse;
}
