import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAccountRequest extends SpeakeasyBase {
    request?: shared.CreateAccount;
}
export declare class CreateAccountResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
}
