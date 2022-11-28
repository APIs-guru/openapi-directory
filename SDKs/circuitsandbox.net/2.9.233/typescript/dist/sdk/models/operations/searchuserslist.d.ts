import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchUsersListQueryParams extends SpeakeasyBase {
    name: string[];
    returnFullUserInfo?: boolean;
    secondaryLookup?: boolean;
}
export declare class SearchUsersListSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class SearchUsersListRequest extends SpeakeasyBase {
    queryParams: SearchUsersListQueryParams;
    security: SearchUsersListSecurity;
}
export declare class SearchUsersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    users?: any[];
}
