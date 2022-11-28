import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserInfoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUserInfoRequest extends SpeakeasyBase {
    security: GetUserInfoSecurity;
}
export declare class GetUserInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: any[];
}
