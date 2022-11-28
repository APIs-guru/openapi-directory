import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsScopeTokenPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class AppsScopeTokenRequestBody extends SpeakeasyBase {
    accessToken: string;
    permissions?: shared.AppPermissions;
    repositories?: string[];
    repositoryIds?: number[];
    target?: string;
    targetId?: number;
}
export declare class AppsScopeTokenRequest extends SpeakeasyBase {
    pathParams: AppsScopeTokenPathParams;
    request?: AppsScopeTokenRequestBody;
}
export declare class AppsScopeTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorization?: shared.Authorization;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
