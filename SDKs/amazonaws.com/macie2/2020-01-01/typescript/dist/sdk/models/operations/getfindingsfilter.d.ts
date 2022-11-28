import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFindingsFilterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFindingsFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFindingsFilterRequest extends SpeakeasyBase {
    pathParams: GetFindingsFilterPathParams;
    headers: GetFindingsFilterHeaders;
}
export declare class GetFindingsFilterResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getFindingsFilterResponse?: shared.GetFindingsFilterResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
