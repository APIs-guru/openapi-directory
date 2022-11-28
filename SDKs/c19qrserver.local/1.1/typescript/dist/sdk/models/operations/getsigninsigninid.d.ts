import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSigninSigninIdPathParams extends SpeakeasyBase {
    signinId: number;
}
export declare class GetSigninSigninIdRequest extends SpeakeasyBase {
    pathParams: GetSigninSigninIdPathParams;
}
export declare class GetSigninSigninIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    signin?: shared.Signin;
}
