import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetaccesstokenIdRequestBody extends SpeakeasyBase {
    getAccessTokenUsingAuthorizationCode?: shared.AccessToken;
    getAccessTokenUsingDeviceCodeAndOtp?: any;
    getAccessTokenUsingRefreshToken?: shared.RefreshToken;
}
export declare class GetaccesstokenIdRequest extends SpeakeasyBase {
    request: GetaccesstokenIdRequestBody;
}
export declare class GetaccesstokenIdResponse extends SpeakeasyBase {
    accessResponse?: shared.AccessResponse;
    contentType: string;
    statusCode: number;
}
