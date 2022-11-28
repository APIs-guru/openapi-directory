import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApplicationPathParams extends SpeakeasyBase {
    application: string;
}
export declare class UpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    description?: string;
    name?: string;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    pathParams: UpdateApplicationPathParams;
    headers: UpdateApplicationHeaders;
    request: UpdateApplicationRequestBody;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateApplicationResponse?: shared.UpdateApplicationResponse;
}
