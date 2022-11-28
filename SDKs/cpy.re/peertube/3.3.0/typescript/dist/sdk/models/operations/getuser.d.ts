import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUserQueryParams extends SpeakeasyBase {
    withStats?: boolean;
}
export declare class GetUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUserRequest extends SpeakeasyBase {
    pathParams: GetUserPathParams;
    queryParams: GetUserQueryParams;
    security: GetUserSecurity;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUser200ApplicationJsonOneOf?: any;
}
