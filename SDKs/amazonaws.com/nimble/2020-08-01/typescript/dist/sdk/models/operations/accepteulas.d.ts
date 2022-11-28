import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AcceptEulasPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class AcceptEulasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptEulasRequestBody extends SpeakeasyBase {
    eulaIds?: string[];
}
export declare class AcceptEulasRequest extends SpeakeasyBase {
    pathParams: AcceptEulasPathParams;
    headers: AcceptEulasHeaders;
    request: AcceptEulasRequestBody;
}
export declare class AcceptEulasResponse extends SpeakeasyBase {
    acceptEulasResponse?: shared.AcceptEulasResponse;
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
