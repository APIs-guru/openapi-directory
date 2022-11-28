import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteServerBlocklistAccountsAccountNamePathParams extends SpeakeasyBase {
    accountName: string;
}
export declare class DeleteServerBlocklistAccountsAccountNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteServerBlocklistAccountsAccountNameRequest extends SpeakeasyBase {
    pathParams: DeleteServerBlocklistAccountsAccountNamePathParams;
    security: DeleteServerBlocklistAccountsAccountNameSecurity;
}
export declare class DeleteServerBlocklistAccountsAccountNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
