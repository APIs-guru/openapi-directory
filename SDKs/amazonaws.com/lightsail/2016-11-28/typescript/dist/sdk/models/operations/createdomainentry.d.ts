import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDomainEntryXAmzTargetEnum {
    Lightsail20161128CreateDomainEntry = "Lightsail_20161128.CreateDomainEntry"
}
export declare class CreateDomainEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDomainEntryXAmzTargetEnum;
}
export declare class CreateDomainEntryRequest extends SpeakeasyBase {
    headers: CreateDomainEntryHeaders;
    request: shared.CreateDomainEntryRequest;
}
export declare class CreateDomainEntryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createDomainEntryResult?: shared.CreateDomainEntryResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
