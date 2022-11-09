import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApplicationPathParams extends SpeakeasyBase {
    application: string;
}
export declare class GetApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    pathParams: GetApplicationPathParams;
    headers: GetApplicationHeaders;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    contentType: string;
    getApplicationResponse?: shared.GetApplicationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
