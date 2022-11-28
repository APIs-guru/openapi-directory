import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteServiceXAmzTargetEnum {
    Route53AutoNamingV20170314DeleteService = "Route53AutoNaming_v20170314.DeleteService"
}
export declare class DeleteServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceXAmzTargetEnum;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    headers: DeleteServiceHeaders;
    request: shared.DeleteServiceRequest;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    deleteServiceResponse?: Map<string, any>;
    invalidInput?: any;
    resourceInUse?: any;
    serviceNotFound?: any;
    statusCode: number;
}
