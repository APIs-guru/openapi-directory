import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRegionsXAmzTargetEnum {
    Lightsail20161128GetRegions = "Lightsail_20161128.GetRegions"
}
export declare class GetRegionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegionsXAmzTargetEnum;
}
export declare class GetRegionsRequest extends SpeakeasyBase {
    headers: GetRegionsHeaders;
    request: shared.GetRegionsRequest;
}
export declare class GetRegionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRegionsResult?: shared.GetRegionsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
