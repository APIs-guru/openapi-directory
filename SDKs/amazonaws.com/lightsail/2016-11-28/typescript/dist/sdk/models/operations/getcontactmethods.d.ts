import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContactMethodsXAmzTargetEnum {
    Lightsail20161128GetContactMethods = "Lightsail_20161128.GetContactMethods"
}
export declare class GetContactMethodsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContactMethodsXAmzTargetEnum;
}
export declare class GetContactMethodsRequest extends SpeakeasyBase {
    headers: GetContactMethodsHeaders;
    request: shared.GetContactMethodsRequest;
}
export declare class GetContactMethodsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContactMethodsResult?: shared.GetContactMethodsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
