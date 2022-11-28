import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListResourceInventoryXAmzTargetEnum {
    AwsLicenseManagerListResourceInventory = "AWSLicenseManager.ListResourceInventory"
}
export declare class ListResourceInventoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceInventoryXAmzTargetEnum;
}
export declare class ListResourceInventoryRequest extends SpeakeasyBase {
    headers: ListResourceInventoryHeaders;
    request: shared.ListResourceInventoryRequest;
}
export declare class ListResourceInventoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    failedDependencyException?: any;
    filterLimitExceededException?: any;
    invalidParameterValueException?: any;
    listResourceInventoryResponse?: shared.ListResourceInventoryResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
