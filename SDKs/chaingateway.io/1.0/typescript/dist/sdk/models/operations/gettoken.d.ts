import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTokenHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetTokenRequest extends SpeakeasyBase {
    headers: GetTokenHeaders;
    request: shared.GetTokenRequest;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getToken?: shared.GetToken;
}
