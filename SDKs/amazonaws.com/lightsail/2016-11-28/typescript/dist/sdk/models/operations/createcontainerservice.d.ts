import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateContainerServiceXAmzTargetEnum {
    Lightsail20161128CreateContainerService = "Lightsail_20161128.CreateContainerService"
}
export declare class CreateContainerServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerServiceXAmzTargetEnum;
}
export declare class CreateContainerServiceRequest extends SpeakeasyBase {
    headers: CreateContainerServiceHeaders;
    request: shared.CreateContainerServiceRequest;
}
export declare class CreateContainerServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createContainerServiceResult?: shared.CreateContainerServiceResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
