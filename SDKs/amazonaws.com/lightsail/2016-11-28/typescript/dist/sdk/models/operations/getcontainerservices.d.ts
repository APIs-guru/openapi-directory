import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerServicesXAmzTargetEnum {
    Lightsail20161128GetContainerServices = "Lightsail_20161128.GetContainerServices"
}
export declare class GetContainerServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerServicesXAmzTargetEnum;
}
export declare class GetContainerServicesRequest extends SpeakeasyBase {
    headers: GetContainerServicesHeaders;
    request: shared.GetContainerServicesRequest;
}
export declare class GetContainerServicesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    containerServicesListResult?: shared.ContainerServicesListResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
