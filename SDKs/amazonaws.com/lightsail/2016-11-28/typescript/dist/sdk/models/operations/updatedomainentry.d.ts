import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDomainEntryXAmzTargetEnum {
    Lightsail20161128UpdateDomainEntry = "Lightsail_20161128.UpdateDomainEntry"
}
export declare class UpdateDomainEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainEntryXAmzTargetEnum;
}
export declare class UpdateDomainEntryRequest extends SpeakeasyBase {
    headers: UpdateDomainEntryHeaders;
    request: shared.UpdateDomainEntryRequest;
}
export declare class UpdateDomainEntryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateDomainEntryResult?: shared.UpdateDomainEntryResult;
}
