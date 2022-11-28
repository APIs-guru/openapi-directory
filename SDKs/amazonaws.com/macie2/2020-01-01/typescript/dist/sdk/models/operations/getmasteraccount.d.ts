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
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getMasterAccountResponse?: shared.GetMasterAccountResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
