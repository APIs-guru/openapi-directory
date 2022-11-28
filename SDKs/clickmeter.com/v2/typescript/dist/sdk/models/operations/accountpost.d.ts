import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountPostRequests extends SpeakeasyBase {
    apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;
    apiCoreDtoAccountingUser1?: shared.ApiCoreDtoAccountingUser;
    apiCoreDtoAccountingUser2?: shared.ApiCoreDtoAccountingUser;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AccountPostRequest extends SpeakeasyBase {
    request: AccountPostRequests;
}
export declare class AccountPostResponse extends SpeakeasyBase {
    apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
