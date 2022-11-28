import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDomainXAmzTargetEnum {
    Lightsail20161128CreateDomain = "Lightsail_20161128.CreateDomain"
}
export declare class CreateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDomainXAmzTargetEnum;
}
export declare class CreateDomainRequest extends SpeakeasyBase {
    headers: CreateDomainHeaders;
    request: shared.CreateDomainRequest;
}
export declare class CreateDomainResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createDomainResult?: shared.CreateDomainResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
