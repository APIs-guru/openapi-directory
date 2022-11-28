import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDomainEntryXAmzTargetEnum {
    Lightsail20161128DeleteDomainEntry = "Lightsail_20161128.DeleteDomainEntry"
}
export declare class DeleteDomainEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDomainEntryXAmzTargetEnum;
}
export declare class DeleteDomainEntryRequest extends SpeakeasyBase {
    headers: DeleteDomainEntryHeaders;
    request: shared.DeleteDomainEntryRequest;
}
export declare class DeleteDomainEntryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteDomainEntryResult?: shared.DeleteDomainEntryResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
