import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerServiceDeploymentsXAmzTargetEnum {
    Lightsail20161128GetContainerServiceDeployments = "Lightsail_20161128.GetContainerServiceDeployments"
}
export declare class GetContainerServiceDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerServiceDeploymentsXAmzTargetEnum;
}
export declare class GetContainerServiceDeploymentsRequest extends SpeakeasyBase {
    headers: GetContainerServiceDeploymentsHeaders;
    request: shared.GetContainerServiceDeploymentsRequest;
}
export declare class GetContainerServiceDeploymentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContainerServiceDeploymentsResult?: shared.GetContainerServiceDeploymentsResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
