import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteContactMethodXAmzTargetEnum {
    Lightsail20161128DeleteContactMethod = "Lightsail_20161128.DeleteContactMethod"
}
export declare class DeleteContactMethodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContactMethodXAmzTargetEnum;
}
export declare class DeleteContactMethodRequest extends SpeakeasyBase {
    headers: DeleteContactMethodHeaders;
    request: shared.DeleteContactMethodRequest;
}
export declare class DeleteContactMethodResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteContactMethodResult?: shared.DeleteContactMethodResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
