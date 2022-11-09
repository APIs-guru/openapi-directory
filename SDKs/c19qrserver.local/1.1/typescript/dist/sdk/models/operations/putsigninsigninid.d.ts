import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutSigninSigninIdPathParams extends SpeakeasyBase {
    signinId: number;
}
export declare class PutSigninSigninIdRequest extends SpeakeasyBase {
    pathParams: PutSigninSigninIdPathParams;
    request?: shared.Signin;
}
export declare class PutSigninSigninIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    userRecord?: shared.UserRecord;
}
