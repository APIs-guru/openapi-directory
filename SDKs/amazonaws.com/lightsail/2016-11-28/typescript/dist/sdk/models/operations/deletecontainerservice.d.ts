import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteContainerServiceXAmzTargetEnum {
    Lightsail20161128DeleteContainerService = "Lightsail_20161128.DeleteContainerService"
}
export declare class DeleteContainerServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContainerServiceXAmzTargetEnum;
}
export declare class DeleteContainerServiceRequest extends SpeakeasyBase {
    headers: DeleteContainerServiceHeaders;
    request: shared.DeleteContainerServiceRequest;
}
export declare class DeleteContainerServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteContainerServiceResult?: Map<string, any>;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
