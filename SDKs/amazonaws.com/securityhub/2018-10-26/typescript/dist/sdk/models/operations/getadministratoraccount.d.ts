import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdministratorAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAdministratorAccountRequest extends SpeakeasyBase {
    headers: GetAdministratorAccountHeaders;
}
export declare class GetAdministratorAccountResponse extends SpeakeasyBase {
    contentType: string;
    getAdministratorAccountResponse?: shared.GetAdministratorAccountResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
