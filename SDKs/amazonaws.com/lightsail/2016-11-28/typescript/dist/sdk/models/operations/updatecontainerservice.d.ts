import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateContainerServiceXAmzTargetEnum {
    Lightsail20161128UpdateContainerService = "Lightsail_20161128.UpdateContainerService"
}
export declare class UpdateContainerServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContainerServiceXAmzTargetEnum;
}
export declare class UpdateContainerServiceRequest extends SpeakeasyBase {
    headers: UpdateContainerServiceHeaders;
    request: shared.UpdateContainerServiceRequest;
}
export declare class UpdateContainerServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateContainerServiceResult?: shared.UpdateContainerServiceResult;
}
