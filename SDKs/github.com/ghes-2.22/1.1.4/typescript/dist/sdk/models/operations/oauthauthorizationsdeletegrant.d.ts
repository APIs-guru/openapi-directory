import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsDeleteGrantPathParams extends SpeakeasyBase {
    grantId: number;
}
export declare class OauthAuthorizationsDeleteGrantRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsDeleteGrantPathParams;
}
export declare class OauthAuthorizationsDeleteGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
