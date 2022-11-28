import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHomeRegionControlXAmzTargetEnum {
    AwsMigrationHubMultiAccountServiceCreateHomeRegionControl = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl"
}
export declare class CreateHomeRegionControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHomeRegionControlXAmzTargetEnum;
}
export declare class CreateHomeRegionControlRequest extends SpeakeasyBase {
    headers: CreateHomeRegionControlHeaders;
    request: shared.CreateHomeRegionControlRequest;
}
export declare class CreateHomeRegionControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createHomeRegionControlResult?: shared.CreateHomeRegionControlResult;
    dryRunOperation?: any;
    internalServerError?: any;
    invalidInputException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
