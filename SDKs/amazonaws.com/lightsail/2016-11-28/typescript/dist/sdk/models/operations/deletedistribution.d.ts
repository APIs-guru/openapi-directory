import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDistributionXAmzTargetEnum {
    Lightsail20161128DeleteDistribution = "Lightsail_20161128.DeleteDistribution"
}
export declare class DeleteDistributionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDistributionXAmzTargetEnum;
}
export declare class DeleteDistributionRequest extends SpeakeasyBase {
    headers: DeleteDistributionHeaders;
    request: shared.DeleteDistributionRequest;
}
export declare class DeleteDistributionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteDistributionResult?: shared.DeleteDistributionResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
