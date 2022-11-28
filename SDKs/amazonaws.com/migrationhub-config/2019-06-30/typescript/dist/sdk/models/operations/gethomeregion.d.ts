import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetHomeRegionXAmzTargetEnum {
    AwsMigrationHubMultiAccountServiceGetHomeRegion = "AWSMigrationHubMultiAccountService.GetHomeRegion"
}
export declare class GetHomeRegionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHomeRegionXAmzTargetEnum;
}
export declare class GetHomeRegionRequest extends SpeakeasyBase {
    headers: GetHomeRegionHeaders;
    request: Map<string, any>;
}
export declare class GetHomeRegionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getHomeRegionResult?: shared.GetHomeRegionResult;
    internalServerError?: any;
    invalidInputException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
