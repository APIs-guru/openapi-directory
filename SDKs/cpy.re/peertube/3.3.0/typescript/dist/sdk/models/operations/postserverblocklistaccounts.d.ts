import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostServerBlocklistAccountsRequestBody extends SpeakeasyBase {
    accountName: string;
}
export declare class PostServerBlocklistAccountsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostServerBlocklistAccountsRequest extends SpeakeasyBase {
    request?: PostServerBlocklistAccountsRequestBody;
    security: PostServerBlocklistAccountsSecurity;
}
export declare class PostServerBlocklistAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
