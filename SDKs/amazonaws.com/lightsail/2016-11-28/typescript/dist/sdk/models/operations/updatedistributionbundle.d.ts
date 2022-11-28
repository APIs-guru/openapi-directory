import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDistributionBundleXAmzTargetEnum {
    Lightsail20161128UpdateDistributionBundle = "Lightsail_20161128.UpdateDistributionBundle"
}
export declare class UpdateDistributionBundleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDistributionBundleXAmzTargetEnum;
}
export declare class UpdateDistributionBundleRequest extends SpeakeasyBase {
    headers: UpdateDistributionBundleHeaders;
    request: shared.UpdateDistributionBundleRequest;
}
export declare class UpdateDistributionBundleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateDistributionBundleResult?: shared.UpdateDistributionBundleResult;
}
