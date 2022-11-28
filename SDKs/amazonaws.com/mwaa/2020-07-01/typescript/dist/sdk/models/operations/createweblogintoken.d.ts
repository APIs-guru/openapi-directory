import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWebLoginTokenPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateWebLoginTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWebLoginTokenRequest extends SpeakeasyBase {
    pathParams: CreateWebLoginTokenPathParams;
    headers: CreateWebLoginTokenHeaders;
}
export declare class CreateWebLoginTokenResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createWebLoginTokenResponse?: shared.CreateWebLoginTokenResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
