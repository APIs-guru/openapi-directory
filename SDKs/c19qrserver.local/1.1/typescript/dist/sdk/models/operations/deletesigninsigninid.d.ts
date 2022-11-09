import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteSigninSigninIdPathParams extends SpeakeasyBase {
    signinId: number;
}
export declare class DeleteSigninSigninIdRequest extends SpeakeasyBase {
    pathParams: DeleteSigninSigninIdPathParams;
}
export declare class DeleteSigninSigninIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
}
