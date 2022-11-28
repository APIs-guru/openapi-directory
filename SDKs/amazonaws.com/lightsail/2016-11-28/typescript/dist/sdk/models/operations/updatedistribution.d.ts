import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDistributionXAmzTargetEnum {
    Lightsail20161128UpdateDistribution = "Lightsail_20161128.UpdateDistribution"
}
export declare class UpdateDistributionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDistributionXAmzTargetEnum;
}
export declare class UpdateDistributionRequest extends SpeakeasyBase {
    headers: UpdateDistributionHeaders;
    request: shared.UpdateDistributionRequest;
}
export declare class UpdateDistributionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateDistributionResult?: shared.UpdateDistributionResult;
}
