import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsGetGrantPathParams extends SpeakeasyBase {
    grantId: number;
}
export declare class OauthAuthorizationsGetGrantRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsGetGrantPathParams;
}
export declare class OauthAuthorizationsGetGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    applicationGrant?: shared.ApplicationGrant;
    basicError?: shared.BasicError;
}
