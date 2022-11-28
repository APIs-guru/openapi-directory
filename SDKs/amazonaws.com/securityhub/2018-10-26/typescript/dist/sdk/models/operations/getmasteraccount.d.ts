import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMasterAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMasterAccountRequest extends SpeakeasyBase {
    headers: GetMasterAccountHeaders;
}
export declare class GetMasterAccountResponse extends SpeakeasyBase {
    contentType: string;
    getMasterAccountResponse?: shared.GetMasterAccountResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
