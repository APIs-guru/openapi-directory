import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutUserRequest extends SpeakeasyBase {
    pathParams: PutUserPathParams;
    request: any;
    security: PutUserSecurity;
}
export declare class PutUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
