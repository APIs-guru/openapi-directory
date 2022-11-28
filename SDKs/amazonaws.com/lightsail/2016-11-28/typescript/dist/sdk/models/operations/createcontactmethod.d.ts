import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateContactMethodXAmzTargetEnum {
    Lightsail20161128CreateContactMethod = "Lightsail_20161128.CreateContactMethod"
}
export declare class CreateContactMethodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContactMethodXAmzTargetEnum;
}
export declare class CreateContactMethodRequest extends SpeakeasyBase {
    headers: CreateContactMethodHeaders;
    request: shared.CreateContactMethodRequest;
}
export declare class CreateContactMethodResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createContactMethodResult?: shared.CreateContactMethodResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
