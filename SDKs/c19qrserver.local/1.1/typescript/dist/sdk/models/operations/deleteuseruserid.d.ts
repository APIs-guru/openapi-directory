import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteUserUserIdPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class DeleteUserUserIdRequest extends SpeakeasyBase {
    pathParams: DeleteUserUserIdPathParams;
}
export declare class DeleteUserUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
}
