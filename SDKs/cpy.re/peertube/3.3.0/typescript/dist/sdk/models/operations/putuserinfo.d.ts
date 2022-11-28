import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserInfoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutUserInfoRequest extends SpeakeasyBase {
    request: any;
    security: PutUserInfoSecurity;
}
export declare class PutUserInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
