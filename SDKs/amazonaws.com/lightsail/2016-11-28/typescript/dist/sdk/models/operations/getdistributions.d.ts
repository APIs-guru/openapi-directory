import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDistributionsXAmzTargetEnum {
    Lightsail20161128GetDistributions = "Lightsail_20161128.GetDistributions"
}
export declare class GetDistributionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDistributionsXAmzTargetEnum;
}
export declare class GetDistributionsRequest extends SpeakeasyBase {
    headers: GetDistributionsHeaders;
    request: shared.GetDistributionsRequest;
}
export declare class GetDistributionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDistributionsResult?: shared.GetDistributionsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
