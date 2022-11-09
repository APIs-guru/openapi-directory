import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetUserUserIdPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserUserIdRequest extends SpeakeasyBase {
    pathParams: GetUserUserIdPathParams;
}
export declare class GetUserUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    userRecord?: shared.UserRecord;
}
