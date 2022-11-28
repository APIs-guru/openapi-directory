import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelUserPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DelUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelUserRequest extends SpeakeasyBase {
    pathParams: DelUserPathParams;
    security: DelUserSecurity;
}
export declare class DelUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
