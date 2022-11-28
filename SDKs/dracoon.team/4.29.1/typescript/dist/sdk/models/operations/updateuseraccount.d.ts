import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserAccountHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateUserAccountRequest extends SpeakeasyBase {
    headers: UpdateUserAccountHeaders;
    request: shared.UpdateUserAccountRequest;
}
export declare class UpdateUserAccountResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userAccount?: shared.UserAccount;
}
