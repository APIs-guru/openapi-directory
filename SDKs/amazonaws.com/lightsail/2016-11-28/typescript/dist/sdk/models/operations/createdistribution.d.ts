import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDistributionXAmzTargetEnum {
    Lightsail20161128CreateDistribution = "Lightsail_20161128.CreateDistribution"
}
export declare class CreateDistributionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDistributionXAmzTargetEnum;
}
export declare class CreateDistributionRequest extends SpeakeasyBase {
    headers: CreateDistributionHeaders;
    request: shared.CreateDistributionRequest;
}
export declare class CreateDistributionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createDistributionResult?: shared.CreateDistributionResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
