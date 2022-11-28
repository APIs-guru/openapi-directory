import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDomainXAmzTargetEnum {
    Lightsail20161128DeleteDomain = "Lightsail_20161128.DeleteDomain"
}
export declare class DeleteDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDomainXAmzTargetEnum;
}
export declare class DeleteDomainRequest extends SpeakeasyBase {
    headers: DeleteDomainHeaders;
    request: shared.DeleteDomainRequest;
}
export declare class DeleteDomainResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteDomainResult?: shared.DeleteDomainResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
