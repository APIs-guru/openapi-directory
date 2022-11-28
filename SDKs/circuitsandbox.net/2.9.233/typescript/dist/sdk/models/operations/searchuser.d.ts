import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchUserQueryParams extends SpeakeasyBase {
    name: string;
}
export declare class SearchUserSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class SearchUserRequest extends SpeakeasyBase {
    queryParams: SearchUserQueryParams;
    security: SearchUserSecurity;
}
export declare class SearchUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    users?: any[];
}
